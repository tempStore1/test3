import { useEffect, useState } from "react";
import Form, { Input, Header, Button } from "@/components/Form";
import { useFormik } from "formik";
import * as Yup from "yup";
import Resource from "../../../resource/LoginResource";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "./LoginAction";
import type { RootState } from "@/store";

interface LoginProps {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = (props: LoginProps) => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector(
    (state: RootState) => state.loginReducer.loginState
  );

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("無效的 Email").required("Email 為必填"),
      password: Yup.string().required("密碼 為必填"),
    }),
    onSubmit: async (values) => {
      const { email, password } = values;
      const user = {
        email,
        password,
      };

      dispatch(userLogin(user));

      // await isLoading(dispatch, true);
      // const result = await Resource.userLogin(user);
      // if (result === "登入成功") {
      //   history("main");
      // }
      // await isLoading(dispatch, false);
    },
  });

  useEffect(() => {
    if (state === "登入成功") {
      history("main");
    }
  }, [state]);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Header>最實用的線上代辦事項服務</Header>
      <Input
        title="Email"
        formikType="email"
        formik={formik}
        placeholder="請輸入Email"
      />
      <Input
        title="密碼"
        formikType="password"
        formik={formik}
        placeholder="請輸入密碼"
        type="password"
      />
      <Button type="submit">登入</Button>
      <Button isReverse type="button" onClick={() => props.setIsLogin(false)}>
        註冊
      </Button>
    </Form>
  );
};

export default Login;
