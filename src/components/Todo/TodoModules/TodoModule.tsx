import { useState } from "react";
import AddNewItem from "./AddNewItem";
import FilterTypeBar, { Label } from "./FilterTypeBar";
import styled from "styled-components";

const TodoBox = styled.div`
  margin-top: 1rem;
  box-shadow: 0px 0px 15px 0px #00000026;
  display: flex;
  border-radius: 10px;
  font-size: 14px;
  min-width: 500px;
  background-color: #fff;
`;
TodoBox.displayName = "TodoBox";

const TodoModule = () => {
  const [filterType, setFilterType] = useState("unfinished");

  return (
    <>
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
      </TodoBox>
    </>
  );
};

export default TodoModule;
