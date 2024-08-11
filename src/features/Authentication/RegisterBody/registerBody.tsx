import React, { useEffect, useState } from "react";
import classes from "./registerBody.module.css";
import { toast } from "react-toastify";
import LoadingButton from "../../../components/LoadingButton";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { register } from "../../../redux/slices/authSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import * as Yup from "yup";
import { Formik } from "formik";
import CustomInput from "../../../components/CustomInput";
import useRedirect from "../../../hooks/useRedirect";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("email"),
  password: Yup.string().min(8).required().label("mật khẩu"),
  fullName: Yup.string().required().label("họ và tên"),
});

function RegisterBody() {
  const [fetching, setFetching] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const redirect = useRedirect();

  useEffect(() => {
    document.title = "PTIT Quizz | Đăng ký";
  }, []);

  const handleRegister = ({
    email,
    password,
    fullName,
  }: {
    email: string;
    password: string;
    fullName: string;
  }) => {
    if (fetching) {
      return;
    }
    setFetching(true);
    dispatch(register({ email, password, fullName }))
      .then(unwrapResult)
      .then(() => {
        redirect("/", "Đăng ký thành công");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Đăng ký không thành công");
      })
      .finally(() => setFetching(false));
  };

  return (
    <div className={classes.body}>
      <h3>Đăng ký và bắt đầu trải nghiệm ngay!</h3>
      <Formik
        initialValues={{
          email: "",
          password: "",
          fullName: "",
          studentCode: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleRegister(values);
        }}
      >
        {({ handleSubmit }) => (
          <>
            <CustomInput
              fieldLabel="Họ và tên"
              fieldName="fullName"
              placeholder="Họ và tên"
            />
            <CustomInput
              fieldLabel="Email"
              fieldName="email"
              placeholder="Email"
            />
            <CustomInput
              fieldLabel="Mật khẩu"
              fieldName="password"
              placeholder="Mật khẩu"
              type={"password"}
            />
            <LoadingButton
              className={classes.registerButton}
              fullWidth={true}
              onClick={handleSubmit}
              fetching={fetching}
            >
              Đăng ký
            </LoadingButton>
          </>
        )}
      </Formik>
    </div>
  );
}

export default RegisterBody;
