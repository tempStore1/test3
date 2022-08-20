import { useState } from "react";
import { MainContainer, Navbar } from "@/components/MainContainer";
import Todo, { TodoModule } from "@/components/Todo";
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
  const [filterType, setFilterType] = useState("unfinished");

  return (
    <MainStyles>
      <Navbar />
      <MainContainer>
        <TodoModule>
          <Todo.AddNewItem />
          <Todo.TodoBox>
            <Todo.FilterTypeBar>
              <Todo.Label
                checked={filterType === "all"}
                onClick={() => setFilterType("all")}
              >
                全部
              </Todo.Label>
              <Todo.Label
                checked={filterType === "unfinished"}
                onClick={() => setFilterType("unfinished")}
              >
                待完成
              </Todo.Label>
              <Todo.Label
                checked={filterType === "finished"}
                onClick={() => setFilterType("finished")}
              >
                完成
              </Todo.Label>
            </Todo.FilterTypeBar>
            <Todo.TodoItem />
            <Todo.TodoFooter />
          </Todo.TodoBox>
        </TodoModule>
      </MainContainer>
    </MainStyles>
  );
};

export default Main;
