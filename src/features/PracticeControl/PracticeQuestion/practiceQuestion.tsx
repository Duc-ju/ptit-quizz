import React, { useCallback, useEffect, useMemo, useState } from "react";
import classes from "./practiceQuestion.module.css";
import { usePracticeRoomSelector } from "../../../redux/selector";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { Answer } from "../../../models/multiple-question";
import {
  addSelectedAnswer,
  decreaseQuestionCountDown,
  decreaseResultCountDown,
  increaseTotalTime,
  nextQuestion,
  saveResult,
  setSavingResult,
} from "../../../redux/slices/practiceRoomSlice";
import { toast } from "react-toastify";
import LoadingButton from "../../../components/LoadingButton";
// @ts-ignore
import mergeClassNames from "merge-class-names";
import { AiOutlineClockCircle } from "@react-icons/all-files/ai/AiOutlineClockCircle";
import { FiPlay } from "@react-icons/all-files/fi/FiPlay";
import { FiPause } from "@react-icons/all-files/fi/FiPause";
import { GoListUnordered } from "@react-icons/all-files/go/GoListUnordered";
import useHideFooter from "../../../hooks/useHideFooter";
import useHideSnowFlakeButton from "../../../hooks/useHideSnowFlakeButton";
import AnswerIcon from "../../../components/AnswerIcon";
import { unwrapResult } from "@reduxjs/toolkit";

const answerIndexNameMapping = ["A", "B", "C", "D"];

function PracticeQuestion() {
  const {
    questions,
    currentQuestionIndex,
    config,
    questionCountDown,
    resultCountDown,
    currentSelectedAnswerIndexes,
    shouldShowingResult,
    shouldNextQuestion,
    sufferIndexes,
  } = usePracticeRoomSelector();
  const dispatch = useDispatch<AppDispatch>();
  const [playing, setPlaying] = useState(true);
  useHideFooter();
  useHideSnowFlakeButton();

  const currentQuestion = useMemo(() => {
    return questions && questions.length
      ? questions[sufferIndexes[currentQuestionIndex]]
      : null;
  }, [questions, sufferIndexes, currentQuestionIndex]);

  const numberOfKey = useMemo(() => {
    return currentQuestion
      ? currentQuestion.answers.filter((answer) => answer.isKey).length
      : 0;
  }, [currentQuestion]);

  const isMultipleChoice = numberOfKey > 1;

  useEffect(() => {
    let questionCountTimeInterval: NodeJS.Timeout;
    if (config.maxQuestionTime !== "OFF" && playing) {
      questionCountTimeInterval = setInterval(() => {
        dispatch(decreaseQuestionCountDown());
      }, 1000);
    }
    return () => {
      clearTimeout(questionCountTimeInterval);
    };
  }, [
    currentQuestionIndex,
    questions,
    playing,
    config.maxQuestionTime,
    dispatch,
  ]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (playing) {
      intervalId = setInterval(() => {
        dispatch(increaseTotalTime());
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [dispatch, playing]);

  useEffect(() => {
    if (shouldNextQuestion) {
      dispatch(nextQuestion());
    }
  }, [currentQuestionIndex, dispatch, shouldNextQuestion]);

  useEffect(() => {
    setPlaying(true);
  }, [currentQuestion]);

  useEffect(() => {
    let resultCountTimeInterval: NodeJS.Timeout;
    if (config.maxResultTime !== "OFF" && shouldShowingResult && playing) {
      resultCountTimeInterval = setInterval(() => {
        dispatch(decreaseResultCountDown());
      }, 1000);
    }
    return () => {
      clearTimeout(resultCountTimeInterval);
    };
  }, [
    currentQuestionIndex,
    shouldShowingResult,
    playing,
    config.maxResultTime,
    dispatch,
  ]);

  useEffect(() => {
    if (
      shouldShowingResult &&
      config.showQuestionKeyAfterQuestionEnd &&
      config.showNotification
    ) {
      const rightAnswer = currentQuestion
        ? currentQuestion.answers.filter(
            (answer) =>
              (currentSelectedAnswerIndexes.includes(answer.idx) &&
                !answer.isKey) ||
              (!currentSelectedAnswerIndexes.includes(answer.idx) &&
                answer.isKey)
          ).length === 0
        : false;
      rightAnswer
        ? toast.info("Câu trả lời chính xác")
        : currentSelectedAnswerIndexes.length === 0
        ? toast.warning("Bạn chưa chọn đáp án cho câu hỏi này")
        : toast.error("Câu trả lời chưa chính xác");
    }
  }, [
    shouldShowingResult,
    config.showQuestionKeyAfterQuestionEnd,
    currentQuestion,
    currentSelectedAnswerIndexes,
    config.showNotification,
  ]);

  const handleSelectAnswer = (answer: Answer) => {
    if (
      shouldShowingResult ||
      currentSelectedAnswerIndexes.includes(answer.idx) ||
      currentSelectedAnswerIndexes.length >= numberOfKey
    ) {
      return;
    }
    dispatch(addSelectedAnswer(answer.idx));
  };

  const handleNextQuestion = () => {
    if (!shouldShowingResult) {
      toast.warning("Vui lòng chọn đáp án cho câu hỏi");
      return;
    }
    dispatch(nextQuestion());
    if (currentQuestionIndex >= questions.length - 1) {
      dispatch(setSavingResult(true));
      dispatch(saveResult())
        .then(unwrapResult)
        .then(() => {
          toast.info("Đã lưu kết quả luyện tập");
        })
        .catch((err) => {
          console.error(err);
          toast.error("Không thể lưu kết quả luyện tập");
        })
        .finally(() => {
          dispatch(setSavingResult(false));
        });
    }
  };

  const getIconAnswerType = useCallback(
    (answer: Answer) => {
      if (shouldShowingResult && config.showQuestionKeyAfterQuestionEnd) {
        if (
          currentSelectedAnswerIndexes.includes(answer.idx) &&
          !answer.isKey
        ) {
          return "wrongAnswer";
        }
        if (answer.isKey) {
          return "rightAnswer";
        }
        return "answerUnselect";
      }
      return currentSelectedAnswerIndexes.includes(answer.idx)
        ? "answerSelected"
        : "answerUnselect";
    },
    [
      config.showQuestionKeyAfterQuestionEnd,
      currentSelectedAnswerIndexes,
      shouldShowingResult,
    ]
  );

  if (!currentQuestion) return null;

  return (
    <div className={classes.root}>
      <div className={classes.parent}>
        <div className={classes.container}>
          <div className={classes.scrollContainer}>
            <div className={classes.titleContainer}>
              <div className={classes.indexGroup}>
                <GoListUnordered className={classes.listIcon} />
                <span className={classes.indexLabel}>{`${
                  currentQuestionIndex + 1
                }/${questions.length}`}</span>
              </div>
              {config.maxQuestionTime !== "OFF" ||
              config.maxResultTime !== "OFF" ? (
                <div
                  className={classes.playingContainer}
                  onClick={() => setPlaying((old) => !old)}
                >
                  {playing ? (
                    <FiPause className={classes.pauseIcon} />
                  ) : (
                    <FiPlay className={classes.playIcon} />
                  )}
                  <span
                    className={mergeClassNames(
                      classes.playingMessage,
                      playing ? classes.isPlaying : ""
                    )}
                  >
                    {playing ? "Tạm dừng" : "Tiếp tục"}
                  </span>
                </div>
              ) : null}
              {config.maxQuestionTime !== "OFF" ? (
                <div className={classes.countDownContainer}>
                  <AiOutlineClockCircle className={classes.clockDownIcon} />
                  <span
                    className={classes.countDown}
                  >{`${questionCountDown}s`}</span>
                </div>
              ) : null}
            </div>
            <h6 className={classes.questionTitle}>{currentQuestion.title}</h6>
            <div className={classes.answerContainer}>
              {currentQuestion.answers.map((answer) => {
                const iconAnswerType = getIconAnswerType(answer);
                const answerType =
                  iconAnswerType === "rightAnswer"
                    ? currentSelectedAnswerIndexes.includes(answer.idx) ||
                      currentSelectedAnswerIndexes.length === numberOfKey
                      ? "rightAnswer"
                      : "wrongAnswer"
                    : iconAnswerType;
                return (
                  <div
                    key={answer.idx}
                    className={mergeClassNames(
                      classes.questionAnswerContainer,
                      classes[answerType]
                    )}
                    onClick={() => handleSelectAnswer(answer)}
                  >
                    <span
                      className={mergeClassNames(
                        classes.questionAnswerTitle,
                        classes[`${answerType}Text`]
                      )}
                    >{`${answerIndexNameMapping[answer.idx]}. ${
                      answer.title
                    }`}</span>
                    <AnswerIcon
                      answerType={iconAnswerType}
                      isMultipleChoice={isMultipleChoice}
                    />
                  </div>
                );
              })}
              <div className={classes.bonusGroup}>
                {shouldShowingResult && currentQuestion.bonus ? (
                  <div className={classes.bonusContainer}>
                    <span className={classes.bonusContent}>
                      {currentQuestion.bonus}
                    </span>
                  </div>
                ) : null}
                {shouldShowingResult && currentQuestion.bonusLink ? (
                  <div className={classes.bonusContainer}>
                    Tham khảo:{" "}
                    <a
                      href={currentQuestion.bonusLink}
                      className={classes.bonusLink}
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                    >
                      {currentQuestion.bonusLink}
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className={classes.actionContainer}>
            {config.maxResultTime !== "OFF" && shouldShowingResult ? (
              <span
                className={classes.resultCountDown}
              >{`Tự động chuyển câu hỏi sau ${resultCountDown}s`}</span>
            ) : null}
            <div className={classes.buttonContainer}>
              <LoadingButton
                className={classes.nextQuestion}
                onClick={handleNextQuestion}
              >
                {currentQuestionIndex === questions.length - 1
                  ? "Kết thúc"
                  : "Câu tiếp theo"}
              </LoadingButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PracticeQuestion;
