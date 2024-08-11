import React, { useEffect } from "react";
import {
  usePracticeRoomShouldShowingSummarySelector,
  usePracticeRoomTypeConfigSelector,
} from "../../redux/selector";
import PracticeSummary from "./PracticeSummary";
import PracticeQuestion from "./PracticeQuestion";
import PracticeQuestionFlatSheet from "./PracticeQuestionFlatSheet";

function PracticeControl() {
  useEffect(() => {
    document.title = "PTIT Quizz | Ôn thi trắc nghiệm";
  }, []);
  const shouldShowingSummary = usePracticeRoomShouldShowingSummarySelector();
  const practiceType = usePracticeRoomTypeConfigSelector();

  return (
    <>
      {shouldShowingSummary ? (
        <PracticeSummary />
      ) : practiceType === "SEQUENCE" ? (
        <PracticeQuestion />
      ) : (
        <PracticeQuestionFlatSheet />
      )}
    </>
  );
}

export default PracticeControl;
