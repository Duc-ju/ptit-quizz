import React, {useMemo} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux/store";
import classes from "./practiceSummaryCommon.module.css";
import {restartRoom} from "../../redux/slices/practiceRoomSlice";
import LoadingButton from "../../components/LoadingButton";
import QuestionReview from "../QuestionReview";
import {Cell, Pie, PieChart} from "recharts";
import {RING_CHART_COLOR_CONFIG} from "../../constant/constant";
import useHideFooter from "../../hooks/useHideFooter";
import useRedirect from "../../hooks/useRedirect";
import {Question, QuestionResult} from "../../models/multiple-question";
import useScrollTop from "../../hooks/useScrollTop";
import getMinutesAndSeconds from "../../utils/getMinutesAndSeconds";

export interface PracticeSummaryCommonProps {
  practiceCode: string;
  practiceTitle: string;
  practiceDescription: string;
  questions: Question[];
  results: QuestionResult[];
  fromHistory?: boolean;
  rightAnswerCount: number;
  wrongAnswerCount: number;
  sufferIndexes?: number[];
  totalTime?: number;
}

function PracticeSummaryCommon({
                                 practiceCode,
                                 practiceTitle,
                                 practiceDescription,
                                 questions,
                                 results,
                                 fromHistory,
                                 rightAnswerCount,
                                 wrongAnswerCount,
                                 sufferIndexes,
                                 totalTime,
                               }: PracticeSummaryCommonProps) {
  const dispatch = useDispatch<AppDispatch>();
  const redirect = useRedirect();
  useHideFooter();
  useScrollTop();

  function handleRestartRoom() {
    dispatch(restartRoom());
  }

  const data = [
    {
      name: "Câu đúng",
      value: rightAnswerCount,
    },
    {
      name: "Câu sai",
      value: wrongAnswerCount,
    },
  ];

  function handleRedirectToReview() {
    redirect("/practice-review/" + practiceCode);
  }

  const sortedQuestions = useMemo(() => {
    if (sufferIndexes && sufferIndexes.length) {
      return sufferIndexes.map((sufferIndex) => questions[sufferIndex]);
    }
    return questions;
  }, [questions, sufferIndexes]);

  const sortedResults = useMemo(() => {
    if (sufferIndexes && sufferIndexes.length) {
      return sufferIndexes.map((sufferIndex) => results[sufferIndex]);
    }
    return results;
  }, [results, sufferIndexes]);

  const minuteAndSecond = totalTime ? getMinutesAndSeconds(totalTime) : null;

  return (
    <div className={classes.root}>
      <div className={classes.parent}>
        <div className={classes.container}>
          <div className={classes.scrollContainer}>
            <div>
              <div>
                <div className={classes.titleContainer}>
                  <span className={classes.titleContent}>{practiceTitle}</span>
                </div>
                <div className={classes.descriptionContainer}>
                  <span className={classes.descriptionContent}>
                    {practiceDescription}
                  </span>
                </div>
                {minuteAndSecond ? (
                  <div className={classes.totalTimeContainer}>
                    <span className={classes.totalTimeContent}>
                      Thời gian hoàn thành:{" "}
                      <span
                        className={classes.totalTimeValue}
                      >{`${minuteAndSecond.minutes} phút ${minuteAndSecond.seconds} giây`}</span>
                    </span>
                  </div>
                ) : null}
              </div>
              <div className={classes.chartContainer}>
                <div className={classes.chartWrapper}>
                  <PieChart width={160} height={160}>
                    <Pie
                      data={data}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={70}
                    >
                      {data.map((item, index) => (
                        <Cell
                          key={item.value}
                          fill={RING_CHART_COLOR_CONFIG[index]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                  <div className={classes.accuracyContainer}>
                    <span className={classes.accuracy}>{`${(
                      (rightAnswerCount /
                        (rightAnswerCount + wrongAnswerCount)) *
                      100
                    ).toFixed(1)}%`}</span>
                  </div>
                </div>
                <span
                  className={classes.numberOfRight}
                >{`Số câu đúng: ${rightAnswerCount}/${
                  rightAnswerCount + wrongAnswerCount
                }`}</span>
              </div>
            </div>
            <div className={classes.questionSection}>
              <h5 className={classes.questionSectionTitle}>
                Danh sách câu hỏi
              </h5>
              <div className={classes.questionList}>
                {sortedQuestions.map((question, index) => (
                  <QuestionReview
                    question={question}
                    index={index}
                    result={sortedResults[index]}
                    key={question.id}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className={classes.actionContainer}>
            {!fromHistory ? (
              <LoadingButton
                className={classes.redo}
                onClick={handleRestartRoom}
              >
                Làm lại
              </LoadingButton>
            ) : null}
            <LoadingButton
              className={classes.returnBack}
              onClick={handleRedirectToReview}
            >
              Quay lại trang thiết lập
            </LoadingButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PracticeSummaryCommon;
