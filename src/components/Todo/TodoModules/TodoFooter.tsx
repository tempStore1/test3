import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

type TodoFooterType = {
  todos: TodoType[];
  deleteCompleted: any;
};

interface TodoType {
  id: string;
  content: string;
  completed_at: string;
}

/**
 * 將所有 todos 傳入，可以自動依照 `completed_at` 來分類
 * @param todos: 整個 todos
 * @param deleteCompleted: 刪除已完成項目，只需傳入刪除的 Action
 * @returns
 */
const TodoFooter = ({ todos, deleteCompleted }: TodoFooterType) => {
  const dispatch = useDispatch();
  const [todosType, setTodosType] = useState({
    completed: [],
    unCompleted: [],
  });

  const handleDeleteCompleted = () => {
    todosType.completed.forEach((item) => {
      dispatch(deleteCompleted(item.id));
    });
  };

  useEffect(() => {
    const completeArr: TodoType[] = [];
    const unCompletedArr: TodoType[] = [];
    todos.forEach((item) => {
      if (item.completed_at) {
        completeArr.push(item);
      } else {
        unCompletedArr.push(item);
      }
    });
    setTodosType({
      completed: completeArr,
      unCompleted: unCompletedArr,
    });
  }, [JSON.stringify(todos)]);

  return (
    <div className="todo-flex todo-justify-between todo-items-center todo-p-6">
      <p>{todosType.unCompleted.length} 個待完成項目</p>
      <button
        type="button"
        className="todo-pr-4 todo-text-[#9F9A91]"
        onClick={() => handleDeleteCompleted()}
      >
        清空已完成項目
      </button>
    </div>
  );
};

export default TodoFooter;
