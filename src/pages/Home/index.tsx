import { useState, useEffect } from "react";
import * as React from "react";
import { HomeContainer, DecorateBox } from "@/components/HomeContainer";
import Login from "./Login";
import Register from "./Register";

const Home: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <HomeContainer>
      <DecorateBox />
      {isLogin ? (
        <Login setIsLogin={setIsLogin} />
      ) : (
        <Register setIsLogin={setIsLogin} />
      )}
    </HomeContainer>
  );
};

export default Home;
