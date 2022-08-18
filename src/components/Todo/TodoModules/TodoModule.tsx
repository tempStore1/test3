import AddNewItem from "./AddNewItem";
import FilterTypeBar from "./FilterTypeBar";
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

const TodoModule = () => {
  return (
    <>
      <AddNewItem />
      <TodoBox>
        <FilterTypeBar />
      </TodoBox>
    </>
  );
};

export default TodoModule;
