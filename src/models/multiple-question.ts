export interface Subject {
  name: string;
  code: string;
  icon: string;
}

export interface QuestionRange {
  startAt: number;
  endAt: number;
}

export type PracticeType = "SEQUENCE" | "FLAT";

export const PRACTICE_TIME_CHAPTER = "PRACTICE_TIME_CHAPTER";
export const PRACTICE_TIME_RANGE = "PRACTICE_TIME_RANGE";
export const PRACTICE_TIME_ALL = "PRACTICE_TIME_ALL";
export type PracticeTimeType =
  | typeof PRACTICE_TIME_CHAPTER
  | typeof PRACTICE_TIME_RANGE
  | typeof PRACTICE_TIME_ALL;

export interface AnswerSelection {
  selectedAnswerIndexes: number[];
  rightAnswer?: boolean;
}

export interface QuestionResult {
  questionId: string;
  answerSelection: AnswerSelection;
}

export interface PracticeTime {
  id?: string;
  practiceCode: string;
  practiceTitle: string;
  description: string;
  uid: string;
  numberOfRight: number;
  numberOfWrong: number;
  results?: QuestionResult[];
  type: PracticeTimeType;
  chapterIdx?: number;
  questionRange?: QuestionRange;
  createAt?: {
    nanoseconds: number;
    seconds: number;
  };
  sufferIndexes?: number[];
  totalTime?: number;
}

export interface Practice {
  code: string;
  subjectCode: string;
  title: string;
  description: string;
  numberOfQuestion: number;
  chapters?: Chapter[];
  author?: string;
  isHided?: boolean;
}

export interface Chapter {
  title: string;
  description?: string;
  numberOfQuestion: number;
  idx: number;
}

export interface Question {
  id: string;
  chapterIdx?: number;
  practiceCode: string;
  title: string;
  answers: Answer[];
  bonus?: string;
  bonusLink?: string;
  idx: number;
}

export interface Answer {
  title: string;
  isKey: boolean;
  idx: number;
}

export interface PracticeTimeCountMap {
  [key: string]: number;
}
