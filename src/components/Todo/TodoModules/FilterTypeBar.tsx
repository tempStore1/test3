import { useState } from "react";
import styled from "styled-components";

type LabelProps = {
  checked: boolean;
};

export const Label = styled.label<LabelProps>`
  padding: 16px 69px;
  cursor: pointer;
  border-bottom: 3px solid ${({ checked }) => (checked ? "#333333" : "#9F9A91")};
  color: ${({ checked }) => (checked ? "#333333" : "#9F9A91")};
  transition: 0.228s;
`;
Label.displayName = "Label";

/**
 * Radio 元件
 * @param
 * @returns
 */
const FilterTypeBar = ({ children }: { children: any }) => {
  return (
    <>
      <div className="todo-flex todo-justify-center todo-items-center todo-font-bold">
        {children}
      </div>
    </>
  );
};

export default FilterTypeBar;
