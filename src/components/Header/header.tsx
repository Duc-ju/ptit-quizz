import React, { useEffect, useState } from "react";
import classes from "./header.module.css";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import emptyAvatar from "../../static/img/empty-avatar.png";
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
import { useUserSelector } from "../../redux/selector";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import useRedirect from "../../hooks/useRedirect";
import { changeAvatar, logout } from "../../redux/slices/authSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { GrLogout } from "@react-icons/all-files/gr/GrLogout";
import { FiUserPlus } from "@react-icons/all-files/fi/FiUserPlus";
import { MdAccountCircle } from "@react-icons/all-files/md/MdAccountCircle";

function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  const [openMenu, setOpenMenu] = useState(false);
  const inputFileRef = React.createRef<HTMLInputElement>();
  const user = useUserSelector();
  const dispatch = useDispatch<AppDispatch>();
  const redirect = useRedirect();

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

  const handleLogout = () => {
    dispatch(logout())
      .then(unwrapResult)
      .then(() => {
        redirect("/", "Đăng xuất thành công!");
      })
      .catch((e) => {
        console.error(e);
        toast.error("Đăng xuất thất bại vui lòng thử lại nhé!");
      });
  };

  const handleSelectFile = () => {
    inputFileRef.current?.click();
  };

  const handleChooseFile = (e: any) => {
    if (!user) return;
    const file = e.target.files[0];
    if (
      file.type.split("/").length === 0 ||
      file.type.split("/")[0] !== "image"
    ) {
      alert("Vui lòng chọn file hình ảnh");
      return;
    }
    if (file.size > 1048576) {
      alert("Vui lòng chọn ảnh có kích thước dưới 1MB và tỉ lệ 1:1");
      return;
    }
    const fileName = (Math.random() + "").split(".")[1] + file.name;
    const storage = getStorage();
    const storageRef = ref(storage, "images/" + fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      () => {},
      () => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) =>
            dispatch(changeAvatar(downloadURL)).then(unwrapResult)
          )
          .then(() => {
            toast.info("Cập nhật ảnh đại diện thành công!");
          })
          .catch((err) => {
            console.error(err);
            toast.error("Cập nhật ảnh đại diện thất bại");
          });
      }
    );
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
      <input
        type={"file"}
        onChange={handleChooseFile}
        ref={inputFileRef}
        className={classes.fileInput}
        accept={"image/gif, image/jpeg, image/png"}
      />
      {width <= 1024 && (
        <>
          <div className={redundantClass} onClick={handleCloseMenu}></div>
          <div className={menuClasses}>
            <h2 className={classes.header}>PTIT Quizz</h2>
            <ul className={classes.listItem}>
              {!user && (
                <>
                  <li className={classes.menuItem}>
                    <CustomNavLink
                      to={"/login"}
                      className={(navData) =>
                        navData.isActive
                          ? mergeClassNames(
                              classes.menuItemContent,
                              classes.active
                            )
                          : classes.menuItemContent
                      }
                    >
                      <span className={classes.icon}>
                        <MdAccountCircle />
                      </span>
                      <span className={classes.title}>Đăng nhập</span>
                    </CustomNavLink>
                  </li>
                  <li className={classes.menuItem}>
                    <CustomNavLink
                      to={"/register"}
                      className={(navData) =>
                        navData.isActive
                          ? mergeClassNames(
                              classes.menuItemContent,
                              classes.active
                            )
                          : classes.menuItemContent
                      }
                    >
                      <span className={classes.icon}>
                        <FiUserPlus />
                      </span>
                      <span className={classes.title}>Đăng ký</span>
                    </CustomNavLink>
                  </li>
                </>
              )}
              {user && (
                <>
                  <li className={classes.userInfoContainer}>
                    <div className={classes.chooseAvatar}>
                      <span
                        className={classes.avatar}
                        onClick={handleSelectFile}
                        data-tip={
                          user.avatar
                            ? "Thay ảnh đại diện"
                            : "Thêm ảnh đại diện"
                        }
                      >
                        <img
                          className={classes.avatarImg}
                          alt={user.fullName.charAt(0)}
                          src={user.avatar || emptyAvatar}
                        />
                      </span>
                    </div>
                    <div className={classes.userInfo}>
                      <span>{user.fullName}</span>
                      <span>{user.email}</span>
                    </div>
                  </li>
                  <li className={classes.menuItem}>
                    <div
                      className={classes.menuItemContent}
                      onClick={handleLogout}
                    >
                      <span className={classes.icon}>
                        <GrLogout />
                      </span>
                      <span className={classes.title}>Đăng xuất</span>
                    </div>
                  </li>
                </>
              )}
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
          {user ? (
            <div className={classes.infoContainer}>
              <div className={classes.info}>
                <span>{user.fullName}</span>
              </div>
              <div className={classes.avatar}>
                <img
                  className={classes.avatarImg}
                  alt={user.fullName.charAt(0)}
                  src={user.avatar || emptyAvatar}
                />
              </div>
              <div className={classes.popup}>
                <div className={classes.popupContainer}>
                  <div className={classes.popupRow}>
                    <div className={classes.popupLeft}>
                      <span
                        onClick={handleSelectFile}
                        className={classes.popUpAvatar}
                        data-tip={
                          user.avatar
                            ? "Thay ảnh đại diện"
                            : "Thêm ảnh đại diện"
                        }
                      >
                        <img
                          className={classes.avatarImg}
                          alt={user.fullName.charAt(0)}
                          src={user.avatar || emptyAvatar}
                        />
                      </span>
                    </div>
                    <div className={classes.popupRight}>
                      <span>{user.fullName}</span>
                      <span>{user.email}</span>
                    </div>
                  </div>
                  <div className={classes.logoutContainer}>
                    <button
                      className={classes.logoutButton}
                      onClick={handleLogout}
                    >
                      Đăng xuất
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <CustomLink to={"/login"}>Đăng nhập</CustomLink>
              <CustomLink to={"/register"}>Đăng kí</CustomLink>
            </>
          )}
        </div>
      ) : null}
      <ReactTooltip className={classes.tooltip} />
    </div>
  );
}

export default Header;
