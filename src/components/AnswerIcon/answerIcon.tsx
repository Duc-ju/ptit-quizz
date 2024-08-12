import React from "react";
import classes from "./answerIcon.module.css";
import { FiSquare } from "@react-icons/all-files/fi/FiSquare";
import { FiCheckSquare } from "@react-icons/all-files/fi/FiCheckSquare";
import { FaSquare } from "@react-icons/all-files/fa/FaSquare";
import { FiXSquare } from "@react-icons/all-files/fi/FiXSquare";
import { FaCheckCircle } from "@react-icons/all-files/fa/FaCheckCircle";
import { FaRegCircle } from "@react-icons/all-files/fa/FaRegCircle";
import { FaCircle } from "@react-icons/all-files/fa/FaCircle";
import { IoIosCloseCircleOutline } from "@react-icons/all-files/io/IoIosCloseCircleOutline";
import mergeClassNames from "merge-class-names";

function AnswerIcon({
  answerType,
  isMultipleChoice,
}: {
  answerType:
    | "answerUnselect"
    | "rightAnswer"
    | "wrongAnswer"
    | "rightMissingAnswer"
    | "answerSelected";
  isMultipleChoice: boolean;
  size?: number;
}) {
  return (
    <>
      {isMultipleChoice ? (
        answerType === "answerUnselect" ? (
          <FiSquare
            className={mergeClassNames(
              classes[`${answerType}Icon]`],
              classes.squareUncheck
            )}
          />
        ) : answerType === "rightAnswer" ? (
          <FiCheckSquare className={classes.rightAnswerIcon} />
        ) : answerType === "answerSelected" ? (
          <FaSquare className={classes[`${answerType}Icon`]} />
        ) : (
          <FiXSquare className={classes[`${answerType}Icon`]} />
        )
      ) : answerType === "answerUnselect" ? (
        <FaRegCircle className={classes[`${answerType}Icon`]} />
      ) : answerType === "rightAnswer" ? (
        <FaCheckCircle className={classes.rightAnswerIcon} />
      ) : answerType === "answerSelected" ? (
        <FaCircle className={classes[`${answerType}Icon`]} />
      ) : (
        <IoIosCloseCircleOutline className={classes[`${answerType}Icon`]} />
      )}
    </>
  );
}

export default AnswerIcon;
