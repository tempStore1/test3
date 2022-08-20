import { useState } from "react";
import AddNewItem from "./AddNewItem";
import FilterTypeBar, { Label } from "./FilterTypeBar";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const TodoBox = styled.div`
  margin-top: 1rem;
  box-shadow: 0px 0px 15px 0px #00000026;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  font-size: 14px;
  background-color: #fff;
  width: 100%;
`;
TodoBox.displayName = "TodoBox";

const TodoModule = () => {
  const [filterType, setFilterType] = useState("unfinished");

  return (
    <div className="todo-min-w-[500px]">
      <AddNewItem />
      <TodoBox>
        <FilterTypeBar>
          <Label
            checked={filterType === "all"}
            onClick={() => setFilterType("all")}
          >
            全部
          </Label>
          <Label
            checked={filterType === "unfinished"}
            onClick={() => setFilterType("unfinished")}
          >
            待完成
          </Label>
          <Label
            checked={filterType === "finished"}
            onClick={() => setFilterType("finished")}
          >
            完成
          </Label>
        </FilterTypeBar>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoBox>
    </div>
  );
};

export default TodoModule;
