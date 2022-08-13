import { useState } from "react";
import Form, { Input, Header, Button } from "@/components/Form";

interface RegisterProps {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Register = (props: RegisterProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");

  return (
    <Form>
      <Header>註冊帳號</Header>
      <Input
        title="Email"
        value={email}
        errorMsg=""
        placeholder="請輸入Email"
        onChange={setEmail}
      />
      <Input
        title="您的暱稱"
        value={name}
        errorMsg=""
        placeholder="請輸入您的暱稱"
        onChange={setName}
      />
      <Input
        title="密碼"
        value={password}
        errorMsg=""
        placeholder="請輸入密碼"
        onChange={setPassword}
      />
      <Input
        title="再次輸入密碼"
        value={secondPassword}
        errorMsg=""
        placeholder="請再次輸入密碼"
        onChange={setSecondPassword}
      />
      <Button type="submit">註冊帳號</Button>
      <Button isReverse type="button" onClick={() => props.setIsLogin(true)}>
        登入
      </Button>
    </Form>
  );
};

export default Register;
