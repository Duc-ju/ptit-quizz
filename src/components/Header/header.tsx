import React, { useEffect, useState } from "react";
import classes from "./header.module.css";
import { useLocation } from "react-router-dom";
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";
import { AiOutlineInfoCircle } from "@react-icons/all-files/ai/AiOutlineInfoCircle";
import { FcFeedback } from "@react-icons/all-files/fc/FcFeedback";
import mergeClassNames from "merge-class-names";
import ReactTooltip from "react-tooltip";
import SnowMan from "./SnowMan";
import { SHOW_CHRISTMAS_THEME } from "../../constant/constant";
import CustomNavLink from "../CustomNavLink";
import CustomLink from "../CustomLink";
import { THEME_KEYS } from "../../redux/slices/masterSlice";
import ThemePicker from "./ThemePicker";

function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setOpenMenu(false);
  }, [location.pathname]);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const activeItemClass = mergeClassNames(classes.menuItem, classes.active);
  const menuClasses = mergeClassNames(
    classes.mobileMenu,
    openMenu ? classes.open : ""
  );
  const redundantClass = mergeClassNames(
    classes.redundantButton,
    openMenu ? classes.open : ""
  );
  const rootClass = mergeClassNames(classes.root, openMenu ? classes.open : "");

  return (
    <div className={rootClass}>
      {SHOW_CHRISTMAS_THEME && <SnowMan />}
      {width <= 1024 && (
        <>
          <div className={redundantClass} onClick={handleCloseMenu}></div>
          <div className={menuClasses}>
            <h2 className={classes.header}>PTIT Quizz</h2>
            <ul className={classes.listItem}>
              <li className={activeItemClass}>
                <CustomNavLink
                  to={"/about"}
                  className={(navData) =>
                    navData.isActive
                      ? mergeClassNames(classes.menuItemContent, classes.active)
                      : classes.menuItemContent
                  }
                >
                  <span className={classes.icon}>
                    <AiOutlineInfoCircle />
                  </span>
                  <span className={classes.title}>Giới thiệu</span>
                </CustomNavLink>
              </li>
              <li className={classes.menuItem}>
                <a
                  href={
                    "mailto:gradeptit@gmail.com?subject=Feedback to Gradeptit"
                  }
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  className={classes.menuItemContent}
                >
                  <span className={classes.icon}>
                    <FcFeedback />
                  </span>
                  <span className={classes.title}>Góp ý</span>
                </a>
              </li>
            </ul>
            <div className={classes.bottomSetting}>
              <div className={classes.themePickerContainer}>
                {THEME_KEYS.map((themeKey) => (
                  <ThemePicker
                    mobileMenu={true}
                    themeKey={themeKey}
                    key={themeKey}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
      <div className={classes.left}>
        <CustomLink to={"/"}>PTIT Quizz</CustomLink>
      </div>
      {width < 1024 && (
        <div className={classes.menuButtonContainer}>
          <button className={classes.menuButton} onClick={handleOpenMenu}>
            <AiOutlineMenu />
          </button>
        </div>
      )}
      {width >= 1024 ? (
        <div className={classes.right}>
          <div className={classes.themePickerContainer}>
            {THEME_KEYS.map((themeKey) => (
              <ThemePicker
                mobileMenu={false}
                themeKey={themeKey}
                key={themeKey}
              />
            ))}
          </div>
          <CustomLink to={"/about"}>Giới thiệu</CustomLink>
          <a
            href={"mailto:gradeptit@gmail.com?subject=Feedback to Gradeptit"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            Góp ý
          </a>
        </div>
      ) : null}
      <ReactTooltip className={classes.tooltip} />
    </div>
  );
}

export default Header;
