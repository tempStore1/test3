import { useState } from "react";
import styled from "styled-components";

type LabelProps = {
  checked: boolean;
};

const Label = styled.label<LabelProps>`
  padding: 16px 69px;
  cursor: pointer;
  border-bottom: 3px solid ${({ checked }) => (checked ? "#333333" : "#9F9A91")};
  color: ${({ checked }) => (checked ? "#333333" : "#9F9A91")};
  transition: 0.228s;
`;

const FilterTypeBar = () => {
  const [filterType, setFilterType] = useState("unfinished");
  return (
    <>
      <div className="todo-hidden">
        <input type="radio" name="all" value="all" />
        <input type="radio" name="unfinished" value="unfinished" />
        <input type="radio" name="finished" value="finished" />
      </div>
      <div className="todo-flex todo-justify-center todo-items-center todo-font-bold">
        <Label
          checked={filterType === "all"}
          // className="todo-py-4 todo-px-16 todo-cursor-pointer todo-border-b-2 todo-border-[#333]"
          htmlFor="all"
          onClick={() => setFilterType("all")}
        >
          全部
        </Label>
        <Label
          checked={filterType === "unfinished"}
          // className="todo-py-4 todo-px-16 todo-cursor-pointer todo-border-b-2 todo-border-[#EFEFEF] todo-text-[#9F9A91]"
          htmlFor="unfinished"
          onClick={() => setFilterType("unfinished")}
        >
          待完成
        </Label>
        <Label
          checked={filterType === "finished"}
          // className="todo-py-4 todo-px-16 todo-cursor-pointer todo-border-b-2 todo-border-[#EFEFEF] todo-text-[#9F9A91]"
          htmlFor="finished"
          onClick={() => setFilterType("finished")}
        >
          完成
        </Label>
      </div>
    </>
  );
};

export default FilterTypeBar;
