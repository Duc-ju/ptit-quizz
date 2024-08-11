export interface PracticeSubject {
  id: string;
  name: string;
  icon: string;
  keywords: string[];
  createAt?: {
    nanoseconds: number;
    seconds: number;
  };
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
  practiceId: string;
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
  id: string;
  practiceSubjectId: string;
  title: string;
  keywords: string[];
  description: string;
  chapters?: Chapter[];
  numberOfQuestion: number;
  numberOfPracticed: number;
  author?: string;
  isHided: boolean;
  createAt?: {
    nanoseconds: number;
    seconds: number;
  };
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
  practiceId: string;
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
