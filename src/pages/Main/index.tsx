import * as React from "react";
import { MainContainer } from "@/components/MainContainer";
import { Logo } from "@/components/HomeContainer/DecorateBox";
import styled from "styled-components";

const MainBg = styled.div`
  background: linear-gradient(
    172.7deg,
    #ffd370 5.12%,
    #ffd370 53.33%,
    #ffd370 53.44%,
    #ffffff 53.45%,
    #ffffff 94.32%
  );
`;

const Main: React.FC = () => {
  return (
    <MainBg>
      <Logo />
      <MainContainer></MainContainer>
    </MainBg>
  );
};

export default Main;
