import * as React from "react";
import { MainContainer, Navbar } from "@/components/MainContainer";
import TodoModule from "@/components/Todo";
import styled from "styled-components";

const MainStyles = styled.div`
  background: linear-gradient(
    172.7deg,
    #ffd370 5.12%,
    #ffd370 53.33%,
    #ffd370 53.44%,
    #ffffff 53.45%,
    #ffffff 94.32%
  );
  padding: 50px;
`;
MainStyles.displayName = "MainStyles";

const Main: React.FC = () => {
  return (
    <MainStyles>
      <Navbar />
      <MainContainer>
        <TodoModule />
      </MainContainer>
    </MainStyles>
  );
};

export default Main;
