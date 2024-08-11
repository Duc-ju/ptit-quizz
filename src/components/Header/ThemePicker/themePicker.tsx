import React, { useMemo } from "react";
import {
  setThemeKey,
  THEME_COLORS,
  THEME_KEYS,
} from "../../../redux/slices/masterSlice";
import classes from "./themePicker.module.css";
import { useThemeKeyMasterSelector } from "../../../redux/selector";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";

function ThemePicker({
  themeKey,
  mobileMenu,
}: {
  themeKey: typeof THEME_KEYS[number];
  mobileMenu: boolean;
}) {
  const selectedThemeKey = useThemeKeyMasterSelector();
  const dispatch = useDispatch<AppDispatch>();
  const colors = useMemo(() => {
    return THEME_COLORS[themeKey];
  }, [themeKey]);

  function handleChooseTheme() {
    if (selectedThemeKey === themeKey) return;
    dispatch(setThemeKey(themeKey));
  }

  const rootBorderColor = useMemo(() => {
    if (mobileMenu) {
      return selectedThemeKey === themeKey
        ? "var(--primary-color)"
        : "var(--white)";
    }
    return selectedThemeKey === themeKey
      ? "var(--white)"
      : "var(--primary-color)";
  }, [selectedThemeKey, themeKey, mobileMenu]);

  return (
    <div
      className={classes.root}
      style={{
        borderColor: rootBorderColor,
        opacity: selectedThemeKey === themeKey ? 1 : 0.5,
      }}
      onClick={handleChooseTheme}
    >
      <div
        className={classes.colorItem}
        style={{
          backgroundColor: `${colors.darkGrey}`,
          bottom: 0,
          right: 0,
        }}
      ></div>
      <div
        className={classes.colorItem}
        style={{
          backgroundColor: `${colors.tertiary}`,
          bottom: 0,
          left: 0,
        }}
      ></div>
      <div
        className={classes.colorItem}
        style={{
          backgroundColor: `${colors.secondary}`,
          top: 0,
          right: 0,
        }}
      ></div>
      <div
        className={classes.colorItem}
        style={{
          backgroundColor: `${colors.primary}`,
          top: 0,
          left: 0,
        }}
      ></div>
    </div>
  );
}

export default ThemePicker;
