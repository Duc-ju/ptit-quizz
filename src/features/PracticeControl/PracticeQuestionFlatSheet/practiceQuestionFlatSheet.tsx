import React, { useEffect, useState } from "react";
import mergeClassNames from "merge-class-names";
import {
  usePracticeRoomPractice,
  usePracticeRoomQuestionsSelector,
  usePracticeRoomResultsSelector,
  usePracticeRoomSavingResultSelector,
  usePracticeRoomTotalTimeSelector,
  usePracticeSufferIndexesSelector,
} from "../../../redux/selector";
import useHideFooter from "../../../hooks/useHideFooter";
import useHideSnowFlakeButton from "../../../hooks/useHideSnowFlakeButton";
import classes from "./practiceQuestionFlatSheet.module.css";
import { GoListUnordered } from "@react-icons/all-files/go/GoListUnordered";
import { FiPause } from "@react-icons/all-files/fi/FiPause";
import { FiPlay } from "@react-icons/all-files/fi/FiPlay";
import { AiOutlineClockCircle } from "@react-icons/all-files/ai/AiOutlineClockCircle";
import LoadingButton from "../../../components/LoadingButton";
import PracticeQuestionFlat from "./PracticeQuestionFlat";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import {
  completeFlatPractice,
  increaseTotalTime,
  saveResult,
} from "../../../redux/slices/practiceRoomSlice";
import getMinutesAndSeconds from "../../../utils/getMinutesAndSeconds";
import { unwrapResult } from "@reduxjs/toolkit";
import { increasePracticeTimeCount } from "../../../redux/slices/masterSlice";
import { toast } from "react-toastify";

function PracticeQuestionFlatSheet() {
  const [playing, setPlaying] = useState(true);
  const questions = usePracticeRoomQuestionsSelector();
  const results = usePracticeRoomResultsSelector();
  const sufferIndexes = usePracticeSufferIndexesSelector();
  const totalTime = usePracticeRoomTotalTimeSelector();
  const savingResult = usePracticeRoomSavingResultSelector();
  const practice = usePracticeRoomPractice();

  useHideFooter();
  useHideSnowFlakeButton();
  const dispatch = useDispatch<AppDispatch>();
  const minuteAndSecond = getMinutesAndSeconds(totalTime);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (playing) {
      intervalId = setInterval(() => {
        dispatch(increaseTotalTime());
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [dispatch, playing]);

  function handleSubmit() {
    if (!practice || !practice.code) return;
    dispatch(completeFlatPractice());
    dispatch(saveResult())
      .then(unwrapResult)
      .then(() => dispatch(increasePracticeTimeCount(practice.code)))
      .then(unwrapResult)
      .then(() => {
        toast.info("Đã lưu kết quả luyện tập");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Không thể lưu kết quả luyện tập");
      });
  }

  return (
    <div className={classes.root}>
      <div className={classes.parent}>
        <div className={classes.container}>
          <div className={classes.scrollContainer}>
            <div className={classes.titleContainer}>
              <div className={classes.indexGroup}>
                <GoListUnordered className={classes.listIcon} />
                <span
                  className={classes.indexLabel}
                >{`${questions.length} câu hỏi`}</span>
              </div>
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
              <div className={classes.countDownContainer}>
                <AiOutlineClockCircle className={classes.clockDownIcon} />
                <span
                  className={classes.countDown}
                >{`${minuteAndSecond.minutes}p ${minuteAndSecond.seconds}s`}</span>
              </div>
            </div>
            <div className={classes.questionContainer}>
              {new Array(questions.length).fill(null).map((_, index) => (
                <PracticeQuestionFlat
                  key={index}
                  question={questions[sufferIndexes[index]]}
                  questionIndex={index}
                  questionResult={results[sufferIndexes[index]]}
                />
              ))}
            </div>
          </div>
          <div className={classes.actionContainer}>
            <div className={classes.buttonContainer}>
              <LoadingButton
                className={classes.nextQuestion}
                onClick={handleSubmit}
                fetching={savingResult}
              >
                Kết thúc
              </LoadingButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PracticeQuestionFlatSheet;
