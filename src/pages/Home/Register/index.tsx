import { useState } from "react";
import Form, { Input, Header, Button } from "@/components/Form";
import Resource from "./RegisterResource";
import { useFormik } from "formik";
import * as Yup from "yup";

interface RegisterProps {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Register = (props: RegisterProps) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      nickname: "",
      password: "",
      rePassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("無效的 Email").required("Email 為必填"),
      nickname: Yup.string().required("暱稱 為必填"),
      password: Yup.string().required("密碼 為必填"),
      rePassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "必須與密碼一致")
        .required("再次輸入密碼"),
    }),
    onSubmit: async (values) => {
      const { email, password, nickname } = values;
      const user = {
        email,
        nickname,
        password,
      };
      const result = await Resource.userRegister(user);
      if (result === "註冊成功") {
        props.setIsLogin(true);
      }
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Header>註冊帳號</Header>
      <Input
        title="Email"
        formikType="email"
        formik={formik}
        placeholder="請輸入Email"
      />
      <Input
        title="您的暱稱"
        formikType="nickname"
        formik={formik}
        placeholder="請輸入您的暱稱"
      />
      <Input
        title="密碼"
        formikType="password"
        formik={formik}
        placeholder="請輸入密碼"
        type="password"
      />
      <Input
        title="再次輸入密碼"
        formikType="rePassword"
        formik={formik}
        placeholder="請再次輸入密碼"
        type="password"
      />
      <Button type="submit">註冊帳號</Button>
      <Button isReverse type="button" onClick={() => props.setIsLogin(true)}>
        登入
      </Button>
    </Form>
  );
};

export default Register;
