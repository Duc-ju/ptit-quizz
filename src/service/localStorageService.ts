import {
  PracticeTimeType,
  Question,
  QuestionRange,
} from "../models/multiple-question";

const buildKey = (
  practiceId: string,
  type: PracticeTimeType,
  selectedQuestionRange: QuestionRange | null | undefined,
  selectedChapterIdx: number | null | undefined
) => {
  let key = `${practiceId}_${type}_`;
  if (type === "PRACTICE_TIME_RANGE")
    key =
      key +
      `_${selectedQuestionRange?.startAt}_${selectedQuestionRange?.endAt}`;
  if (type === "PRACTICE_TIME_CHAPTER") key = key + `_${selectedChapterIdx}`;
  return key;
};

export const saveQuestionsToStorage = (
  practiceId: string,
  type: PracticeTimeType,
  questions: Question[],
  selectedQuestionRange: QuestionRange | null | undefined,
  selectedChapterIdx: number | null | undefined
) => {
  try {
    const key = buildKey(
      practiceId,
      type,
      selectedQuestionRange,
      selectedChapterIdx
    );
    localStorage.setItem(key, JSON.stringify(questions));
    console.log("Saved questions, key is " + key);
  } catch (error) {
    console.error("Cannot save questions to cache storage");
  }
};

export const getQuestionsFromStorage = (
  practiceId: string,
  type: PracticeTimeType,
  selectedQuestionRange: QuestionRange | null | undefined,
  selectedChapterIdx: number | null | undefined
) => {
  try {
    const key = buildKey(
      practiceId,
      type,
      selectedQuestionRange,
      selectedChapterIdx
    );
    const res = localStorage.getItem(key);
    if (res) {
      console.log("Cache hit, key is " + key);
      return JSON.parse(res) as Question[];
    }
  } catch (error) {
    console.error("Cannot get questions from cache storage");
  }
  return null;
};
