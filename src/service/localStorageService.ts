import {
  PracticeTimeCountMap,
  PracticeTimeType,
  Question,
  QuestionRange,
} from "../models/multiple-question";
import {
  PRACTICE_TIME_COUNT_MAP_EXP_MINUTES,
  PRACTICE_TIME_COUNT_MAP_KEY,
} from "../constant/constant";

const buildKey = (
  practiceCode: string,
  type: PracticeTimeType,
  selectedQuestionRange: QuestionRange | null | undefined,
  selectedChapterIdx: number | null | undefined
) => {
  let key = `${practiceCode}_${type}_`;
  if (type === "PRACTICE_TIME_RANGE")
    key =
      key +
      `_${selectedQuestionRange?.startAt}_${selectedQuestionRange?.endAt}`;
  if (type === "PRACTICE_TIME_CHAPTER") key = key + `_${selectedChapterIdx}`;
  return key;
};

export const saveQuestionsToStorage = (
  practiceCode: string,
  type: PracticeTimeType,
  questions: Question[],
  selectedQuestionRange: QuestionRange | null | undefined,
  selectedChapterIdx: number | null | undefined
) => {
  try {
    const key = buildKey(
      practiceCode,
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
  practiceCode: string,
  type: PracticeTimeType,
  selectedQuestionRange: QuestionRange | null | undefined,
  selectedChapterIdx: number | null | undefined
) => {
  try {
    const key = buildKey(
      practiceCode,
      type,
      selectedQuestionRange,
      selectedChapterIdx
    );
    const res = localStorage.getItem(key);
    if (res) {
      console.log("Question list. Cache hit, key is " + key);
      return JSON.parse(res) as Question[];
    }
  } catch (error) {
    console.error("Cannot get questions from cache storage");
  }
  return null;
};

export const savePracticeTimeCountMapToStorage = (
  practiceTimeCountMap: PracticeTimeCountMap
) => {
  localStorage.setItem(
    PRACTICE_TIME_COUNT_MAP_KEY,
    JSON.stringify({
      timestamp: new Date().getTime(),
      data: practiceTimeCountMap,
    })
  );
  console.log("Saved practice time count map");
};

export const getPracticeTimeCountMapFromStorage = () => {
  const savedDataString = localStorage.getItem(PRACTICE_TIME_COUNT_MAP_KEY);
  if (!savedDataString) return null;
  try {
    const { timestamp, data } = JSON.parse(savedDataString);
    if (
      timestamp + PRACTICE_TIME_COUNT_MAP_EXP_MINUTES * 60 * 1000 <
      new Date().getTime()
    ) {
      localStorage.removeItem(PRACTICE_TIME_COUNT_MAP_KEY);
      return null;
    }
    console.log("Practice time count map: Cache hit");
    return data as PracticeTimeCountMap;
  } catch (err) {
    return null;
  }
};
