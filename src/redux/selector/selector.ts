import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useUserSelector = () =>
  useSelector((state: RootState) => state.auth.user);

export const useAuthTypeSelector = () =>
  useSelector((state: RootState) => state.auth.authType);

export const useMasterSelector = () =>
  useSelector((state: RootState) => state.master);

export const useThemeKeyMasterSelector = () =>
  useSelector((state: RootState) => state.master.themeKey);

export const useColorsMasterSelector = () =>
  useSelector((state: RootState) => state.master.colors);

export const useFooterVisibleSelector = () =>
  useSelector((state: RootState) => state.master.footerVisible);

export const useSnowFlakeButtonVisibleSelector = () =>
  useSelector((state: RootState) => state.master.snowFlakeButtonVisible);

export const usePracticeRoomSelector = () =>
  useSelector((state: RootState) => state.practiceRoom);

export const usePracticeRoomResultsSelector = () =>
  useSelector((state: RootState) => state.practiceRoom.results);

export const usePracticeRoomQuestionsSelector = () =>
  useSelector((state: RootState) => state.practiceRoom.questions);

export const usePracticeRoomPractice = () =>
  useSelector((state: RootState) => state.practiceRoom.practice);

export const usePracticeRoomPracticeDescriptionSelector = () =>
  useSelector((state: RootState) => state.practiceRoom.practiceDescription);

export const usePracticeRoomDustySelector = () =>
  useSelector((state: RootState) => state.practiceRoom.dusty);

export const usePracticeRoomTypeConfigSelector = () =>
  useSelector((state: RootState) => state.practiceRoom.config.practiceType);

export const usePracticeRoomShouldShowingSummarySelector = () =>
  useSelector((state: RootState) => state.practiceRoom.shouldShowingSummary);

export const usePracticeSufferIndexesSelector = () =>
  useSelector((state: RootState) => state.practiceRoom.sufferIndexes);

export const useQuestionsPreviewDataSelector = () =>
  useSelector((state: RootState) => state.practiceRoom.questionsPreviewData);

export const usePracticeRoomTotalTimeSelector = () =>
  useSelector((state: RootState) => state.practiceRoom.totalTime);

export const usePracticeRoomSavingResultSelector = () =>
  useSelector((state: RootState) => state.practiceRoom.savingResult);
