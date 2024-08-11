import {
  Practice,
  PRACTICE_TIME_RANGE,
  PracticeTime,
  PracticeTimeType,
  PracticeType,
  Question,
  QuestionRange,
  QuestionResult,
} from "../../models/multiple-question";

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { addDocument } from "../../firebase/service";
import { db } from "../../firebase/config";

export const MAX_QUESTION_TIME_DEFAULT = 30;
export const RESULT_TIME_DEFAULT = 20;

export interface PracticeRoomConfig {
  practiceType: PracticeType;
  maxQuestionTime: "OFF" | number;
  maxResultTime: "OFF" | number;
  showQuestionKeyAfterQuestionEnd: boolean;
  type: PracticeTimeType;
  chapterIdx?: number;
  questionRange?: QuestionRange;
  suffer: boolean;
  showNotification: boolean;
}

export interface QuestionsPreviewData {
  visible: boolean;
  questions: Question[];
}

interface PracticeRoomState {
  practice: null | Practice;
  practiceDescription: string;
  questions: Question[];
  currentQuestionIndex: number;
  results: QuestionResult[];
  config: PracticeRoomConfig;
  questionCountDown: number;
  resultCountDown: number;
  currentSelectedAnswerIndexes: number[];
  shouldShowingResult: boolean;
  shouldNextQuestion: boolean;
  shouldShowingSummary: boolean;
  savingResult: boolean;
  dusty: boolean;
  questionsPreviewData: QuestionsPreviewData;
  sufferIndexes: number[];
  totalTime: number;
}

const initialState: PracticeRoomState = {
  practice: null,
  practiceDescription: "",
  questions: [],
  currentQuestionIndex: 0,
  results: [],
  config: {
    practiceType: "SEQUENCE",
    maxQuestionTime: MAX_QUESTION_TIME_DEFAULT,
    maxResultTime: RESULT_TIME_DEFAULT,
    showQuestionKeyAfterQuestionEnd: true,
    type: PRACTICE_TIME_RANGE,
    suffer: false,
    showNotification: true,
  },
  questionCountDown: MAX_QUESTION_TIME_DEFAULT,
  resultCountDown: RESULT_TIME_DEFAULT,
  currentSelectedAnswerIndexes: [],
  shouldShowingResult: false,
  shouldNextQuestion: false,
  shouldShowingSummary: false,
  savingResult: false,
  dusty: false,
  questionsPreviewData: {
    visible: false,
    questions: [],
  },
  sufferIndexes: [],
  totalTime: 0,
};

export const saveResult = createAsyncThunk(
  "practiceRoom/saveResult",
  async (arg, { getState }) => {
    const state = getState() as RootState;
    if (!state.practiceRoom.practice) return;
    const practiceTime: PracticeTime = {
      practiceId: state.practiceRoom.practice.id,
      practiceTitle: state.practiceRoom.practice.title,
      description: state.practiceRoom.practiceDescription,
      uid: state.auth.user?.uid as string,
      numberOfRight: state.practiceRoom.results.filter(
        (result) => result.answerSelection.rightAnswer
      ).length,
      numberOfWrong: state.practiceRoom.results.filter(
        (result) => !result.answerSelection.rightAnswer
      ).length,
      type: state.practiceRoom.config.type,
      results: state.practiceRoom.results,
      totalTime: state.practiceRoom.totalTime,
    };
    if (state.practiceRoom.config.suffer) {
      practiceTime.sufferIndexes = state.practiceRoom.sufferIndexes;
    }
    if (state.practiceRoom.config.chapterIdx) {
      practiceTime.chapterIdx = state.practiceRoom.config.chapterIdx;
    }
    if (state.practiceRoom.config.questionRange) {
      practiceTime.questionRange = state.practiceRoom.config.questionRange;
    }
    await addDocument("practice-times", practiceTime);
    await db
      .collection("practices")
      .doc(state.practiceRoom.practice.id)
      .update({
        numberOfPracticed: state.practiceRoom.practice.numberOfPracticed + 1,
      });
    return state.practiceRoom.practice.numberOfPracticed + 1;
  }
);

export const practiceRoomSlide = createSlice({
  name: "practiceRoom",
  initialState,
  reducers: {
    initRoom: (
      state,
      action: PayloadAction<{
        practice: Practice;
        practiceDescription: string;
        questions: Question[];
        config: PracticeRoomConfig;
      }>
    ) => {
      state.practice = action.payload.practice;
      state.practiceDescription = action.payload.practiceDescription;
      state.questions = action.payload.questions;
      state.config = action.payload.config;
      if (action.payload.config.maxQuestionTime !== "OFF") {
        state.questionCountDown = action.payload.config.maxQuestionTime;
      }
      if (action.payload.config.maxResultTime !== "OFF") {
        state.resultCountDown = action.payload.config.maxResultTime;
      }
      state.dusty = true;
      const fisherYatesShuffle = (arr: number[]) => {
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
      };
      const sourceIndexes = Array.from(
        { length: state.questions.length },
        (_, i) => i
      );
      state.sufferIndexes = action.payload.config.suffer
        ? fisherYatesShuffle(sourceIndexes)
        : sourceIndexes;
      processDefaultState(state);
    },
    decreaseQuestionCountDown: (state) => {
      if (state.shouldShowingResult) {
        return;
      }
      if (state.questionCountDown > 0) {
        state.questionCountDown = state.questionCountDown - 1;
      }
      if (state.questionCountDown <= 0) {
        state.shouldShowingResult = true;
      }
    },
    decreaseResultCountDown: (state) => {
      if (state.shouldShowingSummary) {
        return;
      }
      if (state.resultCountDown > 0) {
        state.resultCountDown = state.resultCountDown - 1;
      }
      if (state.resultCountDown <= 0) {
        state.shouldNextQuestion = true;
      }
    },
    nextQuestion: (state) => {
      state.results[state.sufferIndexes[state.currentQuestionIndex]] = {
        questionId:
          state.questions[state.sufferIndexes[state.currentQuestionIndex]].id,
        answerSelection: {
          selectedAnswerIndexes: state.currentSelectedAnswerIndexes,
          rightAnswer:
            state.questions[
              state.sufferIndexes[state.currentQuestionIndex]
            ].answers.filter(
              (answer) =>
                (state.currentSelectedAnswerIndexes.includes(answer.idx) &&
                  !answer.isKey) ||
                (!state.currentSelectedAnswerIndexes.includes(answer.idx) &&
                  answer.isKey)
            ).length === 0,
        },
      };
      state.currentQuestionIndex = state.currentQuestionIndex + 1;
      if (state.config.maxQuestionTime !== "OFF") {
        state.questionCountDown = state.config.maxQuestionTime;
      }
      if (state.config.maxResultTime !== "OFF") {
        state.resultCountDown = state.config.maxResultTime;
      }
      state.currentSelectedAnswerIndexes = [];
      state.shouldShowingResult = false;
      state.shouldNextQuestion = false;
    },
    addSelectedAnswer: (state, action: PayloadAction<number>) => {
      state.currentSelectedAnswerIndexes.push(action.payload);
      if (
        state.currentSelectedAnswerIndexes.length ===
        state.questions[
          state.sufferIndexes[state.currentQuestionIndex]
        ].answers.filter((answer) => answer.isKey).length
      ) {
        state.shouldShowingResult = true;
      }
    },
    setSavingResult: (state, action: PayloadAction<boolean>) => {
      state.savingResult = action.payload;
    },
    restartRoom: (state) => {
      if (state.config.maxQuestionTime !== "OFF") {
        state.questionCountDown = state.config.maxQuestionTime;
      }
      if (state.config.maxResultTime !== "OFF") {
        state.resultCountDown = state.config.maxResultTime;
      }
      processDefaultState(state);
    },
    resetPracticeRoom: () => initialState,
    showQuestionsPreview: (state, action: PayloadAction<Question[]>) => {
      state.questionsPreviewData.visible = true;
      state.questionsPreviewData.questions = action.payload;
    },
    hideQuestionsPreview: (state) => {
      state.questionsPreviewData.visible = false;
    },
    toggleSelectedAnswer(
      state,
      action: PayloadAction<{
        questionIndex: number;
        answerIdx: number;
      }>
    ) {
      const question =
        state.questions[state.sufferIndexes[action.payload.questionIndex]];
      let currentResult: QuestionResult = state.results[
        state.sufferIndexes[action.payload.questionIndex]
      ] || {
        questionId: question.id,
        answerSelection: {
          selectedAnswerIndexes: [],
        },
      };
      if (
        currentResult.answerSelection.selectedAnswerIndexes.includes(
          action.payload.answerIdx
        )
      ) {
        currentResult.answerSelection.selectedAnswerIndexes =
          currentResult.answerSelection.selectedAnswerIndexes.filter(
            (index) => index !== action.payload.answerIdx
          );
      } else {
        const numberOfKey = question.answers.filter(
          (answer) => answer.isKey
        ).length;
        if (
          currentResult.answerSelection.selectedAnswerIndexes.length <
          numberOfKey
        ) {
          currentResult.answerSelection.selectedAnswerIndexes.push(
            action.payload.answerIdx
          );
        } else if (
          currentResult.answerSelection.selectedAnswerIndexes.length ===
            numberOfKey &&
          numberOfKey === 1
        ) {
          currentResult.answerSelection.selectedAnswerIndexes.pop();
          currentResult.answerSelection.selectedAnswerIndexes.push(
            action.payload.answerIdx
          );
        }
      }
      state.results[state.sufferIndexes[action.payload.questionIndex]] =
        currentResult;
    },
    increaseTotalTime: (state) => {
      state.totalTime++;
    },
    completeFlatPractice: (state) => {
      for (let i = 0; i < state.questions.length; i++) {
        const question = state.questions[state.sufferIndexes[i]];
        let result = state.results[state.sufferIndexes[i]];

        if (!result) {
          result = {
            questionId: question.id,
            answerSelection: {
              selectedAnswerIndexes: [],
            },
          };
        }

        result.answerSelection.rightAnswer =
          question.answers.filter(
            (answer) =>
              (result.answerSelection.selectedAnswerIndexes.includes(
                answer.idx
              ) &&
                !answer.isKey) ||
              (!result.answerSelection.selectedAnswerIndexes.includes(
                answer.idx
              ) &&
                answer.isKey)
          ).length === 0;

        state.results[state.sufferIndexes[i]] = result;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(saveResult.fulfilled, (state, action) => {
      state.savingResult = false;
      if (action.payload && state.practice) {
        state.practice.numberOfPracticed = action.payload;
        state.shouldShowingSummary = true;
      }
    });
  },
});

const processDefaultState = (state: PracticeRoomState) => {
  state.currentQuestionIndex = 0;
  state.currentSelectedAnswerIndexes = [];
  state.shouldShowingResult = false;
  state.shouldNextQuestion = false;
  state.shouldShowingSummary = false;
  state.results = new Array(state.questions.length).fill(null);
  state.savingResult = false;
  state.totalTime = 0;
};

export const {
  initRoom,
  decreaseQuestionCountDown,
  decreaseResultCountDown,
  nextQuestion,
  addSelectedAnswer,
  setSavingResult,
  restartRoom,
  resetPracticeRoom,
  showQuestionsPreview,
  hideQuestionsPreview,
  toggleSelectedAnswer,
  increaseTotalTime,
  completeFlatPractice,
} = practiceRoomSlide.actions;

export default practiceRoomSlide;
