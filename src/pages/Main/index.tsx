import { useState } from "react";
import { MainContainer, Navbar } from "@/components/MainContainer";
import Todo, { TodoModule } from "@/components/Todo";
import Resource from "./MainResource";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isLoading } from "@/components/Spin/SpinResource";

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
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleLogout = async () => {
    await isLoading(dispatch, true);

    const result = await Resource.handleLogout();

    await isLoading(dispatch, false);

    if (result === "已登出") {
      history("/");
    }
  };

  return (
    <MainStyles>
      <Navbar onClick={handleLogout} />
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
