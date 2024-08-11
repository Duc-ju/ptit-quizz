import React, { useEffect, useState } from "react";
import classes from "./resetPassword.module.css";
import { auth } from "../../../firebase/config";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import LoadingButton from "../../../components/LoadingButton";
import * as Yup from "yup";
import { Formik } from "formik";
import CustomInput from "../../../components/CustomInput";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("email"),
});

function ResetPassword(props: { setTab: Function }) {
  const { setTab } = props;
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    document.title = "PTIT Quizz | Đặt lại mật khẩu";
  }, []);

  const handleLogin = ({ email }: { email: string }) => {
    if (fetching) {
      return;
    }
    setFetching(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.info(
          "Thư xác nhận thay đổi mật khẩu đã được gửi tới email của bạn. Bạn nhớ check cả phần thư rác nhé!"
        );
      })
      .catch((err) => {
        console.error(err);
        toast.error("Gửi yêu cầu không thành công");
      })
      .finally(() => {
        setFetching(false);
        setTab(1);
      });
  };

  return (
    <div className={classes.body}>
      <h3>Lấy lại mật khẩu</h3>
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
            <div className={classes.goBack} onClick={() => setTab(1)}>
              Đăng nhập
            </div>
            <LoadingButton
              className={classes.registerButton}
              fullWidth={true}
              onClick={handleSubmit}
              fetching={fetching}
            >
              Gửi yêu cầu
            </LoadingButton>
          </>
        )}
      </Formik>
    </div>
  );
}

export default ResetPassword;
