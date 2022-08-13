import { useState, useEffect } from "react";
import * as React from "react";
import { MainContainer, DecorateBox } from "@/components/MainContainer";
import Login from "./Login";
import Register from "./Register";

const Home: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <MainContainer>
      <DecorateBox />
      {isLogin ? (
        <Login setIsLogin={setIsLogin} />
      ) : (
        <Register setIsLogin={setIsLogin} />
      )}
    </MainContainer>
  );
};

export default Home;
