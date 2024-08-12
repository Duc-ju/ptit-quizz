import React, { useMemo } from "react";
import { Question, QuestionResult } from "../../models/multiple-question";
import classes from "./questionReview.module.css";
import mergeClassNames from "merge-class-names";
import AnswerIcon from "../AnswerIcon";

interface QuestionReviewProps {
  question: Question;
  index: number;
  result?: QuestionResult;
  hideKey?: boolean;
}

function QuestionReview({
  question,
  index,
  result,
  hideKey,
}: QuestionReviewProps) {
  const isMultipleChoice = useMemo(() => {
    return question.answers.filter((answer) => answer.isKey).length > 1;
  }, [question]);

  return (
    <div
      className={mergeClassNames(
        classes.questionContainer,
        !result || result.answerSelection.rightAnswer
          ? classes.rightQuestion
          : classes.wrongQuestion
      )}
    >
      <h6 className={classes.title}>{`Câu ${index + 1}. ${question.title}`}</h6>
      <div className={classes.answerList}>
        {question.answers.map((answer) => {
          const answerType = hideKey
            ? "answerUnselect"
            : answer.isKey
            ? "rightAnswer"
            : !result ||
              !result.answerSelection.selectedAnswerIndexes.includes(answer.idx)
            ? "answerUnselect"
            : "wrongAnswer";
          return (
            <div key={answer.idx} className={classes.answerContainer}>
              <AnswerIcon
                answerType={answerType}
                isMultipleChoice={isMultipleChoice}
                size={14}
              />
              <span className={classes.answer}>{answer.title}</span>
            </div>
          );
        })}
      </div>
      {question.bonus && !hideKey ? (
        <div className={classes.bonus}>
          <span className={classes.bonusText}>{question.bonus}</span>
        </div>
      ) : null}
      {question.bonusLink && !hideKey ? (
        <div className={classes.bonus}>
          Tham khảo:{" "}
          <a
            className={classes.bonusLink}
            target={"_blank"}
            href={question.bonusLink}
            rel={"noopener noreferrer"}
          >
            {question.bonusLink}
          </a>
        </div>
      ) : null}
    </div>
  );
}

export default QuestionReview;
