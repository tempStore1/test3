import { useState } from "react";
import Form, { Input, Header, Button } from "@/components/Form";

interface LoginProps {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = (props: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form>
      <Header>最實用的線上代辦事項服務</Header>
      <Input
        title="Email"
        value={email}
        errorMsg=""
        placeholder="請輸入Email"
        onChange={setEmail}
      />
      <Input
        title="密碼"
        value={password}
        errorMsg=""
        placeholder="請輸入密碼"
        onChange={setPassword}
      />
      <Button type="submit">登入</Button>
      <Button isReverse type="button" onClick={() => props.setIsLogin(false)}>
        註冊
      </Button>
    </Form>
  );
};

export default Login;
