import { useEffect, useState } from "react";
import { MainContainer, Navbar } from "@/components/MainContainer";
import Todo, { TodoModule } from "@/components/Todo";
import Resource from "./MainResource";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isLoading } from "@/resource/SpinResource";
import { getTodos, addTodos } from "./MainAction";
import type { RootState } from "@/store";

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
  const [doSomething, setDoSomething] = useState("");
  const todos = useSelector((state: RootState) => state.mainReducer.todos);
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

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <MainStyles>
      <Navbar onClick={handleLogout} />
      <MainContainer>
        <TodoModule>
          <Todo.AddNewItem
            pushSomeThing={addTodos}
            value={doSomething}
            onChange={setDoSomething}
          />
          {todos.length ? (
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
              {todos.map((item: any) => (
                <Todo.TodoItem key={item.id} content={item.content} />
              ))}
              <Todo.TodoFooter />
            </Todo.TodoBox>
          ) : (
            <Todo.NoTodos />
          )}
        </TodoModule>
      </MainContainer>
    </MainStyles>
  );
};

export default Main;
