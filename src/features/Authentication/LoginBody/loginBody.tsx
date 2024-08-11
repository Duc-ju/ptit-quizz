import React, { useEffect, useState } from "react";
import classes from "./loginBody.module.css";
import { toast } from "react-toastify";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import LoadingButton from "../../../components/LoadingButton";
import * as Yup from "yup";
import { Formik } from "formik";
import CustomInput from "../../../components/CustomInput";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { login } from "../../../redux/slices/authSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import useRedirect from "../../../hooks/useRedirect";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("email"),
  password: Yup.string().min(8).required().label("mật khẩu"),
});

function LoginBody(props: { setTab: Function }) {
  const { setTab } = props;
  const [fetching, setFetching] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const redirect = useRedirect();

  useEffect(() => {
    document.title = "PTIT Quizz | Đăng Nhập";
  }, []);
  const handleLogin = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    if (fetching) return;
    setFetching(true);
    dispatch(login({ email, password }))
      .then(unwrapResult)
      .then(() => {
        redirect("/", "Đăng nhập thành công");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Email hoặc mật khẩu không đúng");
      })
      .finally(() => setFetching(false));
  };

  const handleForgotPassword = () => {
    setTab(3);
  };

  const handleGoogleLogin = () => {
    toast.info(
      "Tính năng này đang được phát triển. Bạn hãy đăng nhập bằng email và mật khẩu nhé."
    );
  };

  const handleFacebookLogin = () => {
    toast.info(
      "Tính năng này đang được phát triển Bạn hãy đăng nhập bằng email và mật khẩu nhé."
    );
  };
  return (
    <div className={classes.body}>
      <h3>Với các tài khoản mạng xã hội</h3>
      <div className={classes.social}>
        <div className={classes.googleButton} onClick={handleGoogleLogin}>
          <span className={classes.icon}>
            <BsGoogle />
          </span>
          <span>Google</span>
        </div>
        <div className={classes.facebookButton} onClick={handleFacebookLogin}>
          <span className={classes.icon}>
            <BsFacebook />
          </span>
          <span>Facebook</span>
        </div>
      </div>
      <div className={classes.br}>hoặc</div>
      <div className={classes.inputContainer}>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ handleSubmit }) => (
            <>
              <CustomInput
                fieldLabel="Email"
                fieldName="email"
                placeholder="Email"
              />
              <CustomInput
                fieldLabel="Mật khẩu"
                fieldName="password"
                placeholder="Mật khẩu"
                containerClassName={classes.passwordGroup}
                type={"password"}
              />
              <div
                className={classes.forgotPassword}
                onClick={handleForgotPassword}
              >
                Quên mật khẩu
              </div>
              <LoadingButton
                className={classes.loginButton}
                onClick={handleSubmit}
                fullWidth={true}
                fetching={fetching}
              >
                Đăng nhập
              </LoadingButton>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default LoginBody;
