// @ts-ignore
import mergeClassNames from "merge-class-names";
import {
  Answer,
  Question,
  QuestionResult,
} from "../../../../models/multiple-question";
import classes from "./practiceQuestionFlat.module.css";
import AnswerIcon from "../../../../components/AnswerIcon";
import React, { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../redux/store";
import { toggleSelectedAnswer } from "../../../../redux/slices/practiceRoomSlice";

const answerIndexNameMapping = ["A", "B", "C", "D"];

type PracticeQuestionFlatProps = {
  question: Question;
  questionIndex: number;
  questionResult?: QuestionResult;
};

function PracticeQuestionFlat({
  question,
  questionIndex,
  questionResult,
}: PracticeQuestionFlatProps) {
  const dispatch = useDispatch<AppDispatch>();

  const getIconAnswerType = useCallback(
    (answer: Answer) => {
      return questionResult &&
        questionResult.answerSelection.selectedAnswerIndexes.includes(
          answer.idx
        )
        ? "answerSelected"
        : "answerUnselect";
    },
    [questionResult]
  );

  const numberOfKey = useMemo(() => {
    return question
      ? question.answers.filter((answer) => answer.isKey).length
      : 0;
  }, [question]);

  const isMultipleChoice = numberOfKey > 1;

  function handleAnswerClick(answer: Answer) {
    dispatch(
      toggleSelectedAnswer({
        questionIndex: questionIndex,
        answerIdx: answer.idx,
      })
    );
  }

  return (
    <div className={classes.question}>
      <h6 className={classes.questionTitle}>{`Câu ${questionIndex + 1}: ${
        question.title
      }`}</h6>
      <div className={classes.answerContainer}>
        {question.answers.map((answer) => {
          const answerType = getIconAnswerType(answer);
          return (
            <div
              key={answer.idx}
              className={mergeClassNames(
                classes.questionAnswerContainer,
                classes[answerType]
              )}
              onClick={() => handleAnswerClick(answer)}
            >
              <span
                className={mergeClassNames(
                  classes.questionAnswerTitle,
                  classes[`${answerType}Text`]
                )}
              >{`${answerIndexNameMapping[answer.idx]}. ${answer.title}`}</span>
              <AnswerIcon
                answerType={answerType}
                isMultipleChoice={isMultipleChoice}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PracticeQuestionFlat;
