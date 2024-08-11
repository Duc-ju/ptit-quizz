import React, { useMemo } from "react";
import {
  usePracticeRoomPractice,
  usePracticeRoomPracticeDescriptionSelector,
  usePracticeRoomQuestionsSelector,
  usePracticeRoomResultsSelector,
  usePracticeRoomTotalTimeSelector,
  usePracticeSufferIndexesSelector,
} from "../../../redux/selector";
import PracticeSummaryCommon from "../../../components/PracticeSummaryCommon";
import { Practice } from "../../../models/multiple-question";

function PracticeSummary() {
  const practice = usePracticeRoomPractice() as Practice;
  const questions = usePracticeRoomQuestionsSelector();
  const results = usePracticeRoomResultsSelector();
  const practiceDescription = usePracticeRoomPracticeDescriptionSelector();
  const sufferIndexes = usePracticeSufferIndexesSelector();
  const totalTime = usePracticeRoomTotalTimeSelector();

  const rightAnswerCount = useMemo(() => {
    return results.filter((result) => result.answerSelection.rightAnswer)
      .length;
  }, [results]);

  const wrongAnswerCount = useMemo(() => {
    return questions.length - rightAnswerCount;
  }, [questions, rightAnswerCount]);

  return (
    <PracticeSummaryCommon
      practiceId={practice.id}
      practiceTitle={practice?.title}
      practiceDescription={practiceDescription}
      questions={questions}
      results={results}
      rightAnswerCount={rightAnswerCount}
      wrongAnswerCount={wrongAnswerCount}
      sufferIndexes={sufferIndexes}
      totalTime={totalTime}
    />
  );
}

export default PracticeSummary;
