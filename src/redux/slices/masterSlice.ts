import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { THEME_KEY } from "../../constant/constant";

export const THEME_KEYS = [
  "default",
  "custom-1",
  "custom-2",
  "custom-3",
  "custom-4",
];

export interface MasterState {
  themeKey: typeof THEME_KEYS[number];
  colors: ThemeColors;
  footerVisible: boolean;
  snowFlakeButtonVisible: boolean;
}

export interface ThemeColors {
  primary: string;
  primary10: string;
  primary15: string;
  secondary: string;
  tertiary: string;
  info: string;
  success: string;
  success10: string;
  success15: string;
  warning: string;
  lightGrey: string;
  littleGrey: string;
  grey: string;
  darkGrey: string;
  white: string;
  black: string;
}

export const THEME_COLORS: Record<typeof THEME_KEYS[number], ThemeColors> = {
  default: {
    primary: "#bb2019",
    primary10: "rgba(187, 32, 25, 0.1)",
    primary15: "rgba(187, 32, 25, 0.15)",
    secondary: "#FF9999",
    tertiary: "#FFF4F4",
    info: "#306da6",
    success: "#57b056",
    success10: "rgba(87, 176, 86, 0.1)",
    success15: "rgba(87, 176, 86, 0.15)",
    warning: "#bb2019",
    lightGrey: "#dddddd",
    littleGrey: "#f3f3f3",
    grey: "#bbbbbb",
    darkGrey: "#808080",
    white: "#ffffff",
    black: "#000000",
  },
  "custom-1": {
    primary: "#bb2019",
    primary10: "rgba(187, 32, 25, 0.1)",
    primary15: "rgba(187, 32, 25, 0.15)",
    secondary: "#c2b280",
    tertiary: "#f2e8d9",
    info: "#99b899",
    success: "#9fa860",
    success10: "rgba(159, 168, 96, 0.1)",
    success15: "rgba(159, 168, 96, 0.15)",
    warning: "#d79920",
    lightGrey: "#e5e5e5",
    littleGrey: "#f3f3f3",
    grey: "#c0c0c0",
    darkGrey: "#999999",
    white: "#ffffff",
    black: "#333333",
  },
  "custom-2": {
    primary: "#3f51b5",
    primary10: "rgba(63, 81, 181, 0.1)",
    primary15: "rgba(63, 81, 181, 0.15)",
    secondary: "#566573",
    tertiary: "#e2e8f0",
    info: "#007bff",
    success: "#4caf50",
    success10: "rgba(76, 175, 80, 0.1)",
    success15: "rgba(76, 175, 80, 0.15)",
    warning: "#ffc107",
    lightGrey: "#e0e0e0",
    littleGrey: "#f3f3f3",
    grey: "#bdbdbd",
    darkGrey: "#757575",
    white: "#ffffff",
    black: "#000000",
  },
  "custom-3": {
    primary: "#009688",
    primary10: "rgba(0, 150, 136, 0.1)",
    primary15: "rgba(0, 150, 136, 0.15)",
    secondary: "#b2d0c7",
    tertiary: "#e0e8ef",
    info: "#007bff",
    success: "#4caf50",
    success10: "rgba(76, 175, 80, 0.1)",
    success15: "rgba(76, 175, 80, 0.15)",
    warning: "#ffc107",
    lightGrey: "#e0e0e0",
    littleGrey: "#f3f3f3",
    grey: "#bdbdbd",
    darkGrey: "#757575",
    white: "#ffffff",
    black: "#000000",
  },
  "custom-4": {
    primary: "#333333",
    primary10: "rgba(51, 51, 51, 0.1)",
    primary15: "rgba(51, 51, 51, 0.15)",
    secondary: "#c0c0c0",
    tertiary: "#e0e0e0",
    info: "#007bff",
    success: "#28a745",
    success10: "rgba(40, 176, 69, 0.1)",
    success15: "rgba(40, 176, 69, 0.15)",
    warning: "#dc3545",
    lightGrey: "#e5e5e5",
    littleGrey: "#f3f3f3",
    grey: "#c0c0c0",
    darkGrey: "#757575",
    white: "#ffffff",
    black: "#000000",
  },
};

const initialState: MasterState = {
  themeKey: "custom-2",
  colors: THEME_COLORS["custom-2"],
  footerVisible: true,
  snowFlakeButtonVisible: true,
};

export const masterSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    loadMasterFromStorage: (state) => {
      const storedThemeKey = window.localStorage.getItem(THEME_KEY);
      const themeKey = storedThemeKey ? storedThemeKey : THEME_KEYS[0];
      window.localStorage.setItem(THEME_KEY, themeKey);
      state.colors = THEME_COLORS[themeKey];
      state.themeKey = themeKey;
    },
    setThemeKey: (state, action: PayloadAction<typeof THEME_KEYS[number]>) => {
      state.themeKey = action.payload;
      state.colors = THEME_COLORS[action.payload];
      window.localStorage.setItem(THEME_KEY, action.payload);
    },
    showFooter: (state) => {
      state.footerVisible = true;
    },
    hideFooter: (state) => {
      state.footerVisible = false;
    },
    showSnowFlakeButton: (state) => {
      state.snowFlakeButtonVisible = true;
    },
    hideSnowFlakeButton: (state) => {
      state.snowFlakeButtonVisible = false;
    },
  },
});

export const {
  setThemeKey,
  loadMasterFromStorage,
  showFooter,
  hideFooter,
  showSnowFlakeButton,
  hideSnowFlakeButton,
} = masterSlice.actions;
