import tick from "@/assets/Image/tick.svg";
import checkbox from "@/assets/Image/checkbox.svg";
import closeItem from "@/assets/Image/closeItem.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { notification } from "antd";

type TodoItemType = {
  content: string;
  itemId: string;
  onClick?: () => void;
  handleEdit?: any;
};

const TodoItem = ({ content, handleEdit, itemId }: TodoItemType) => {
  const [isEdit, setIsEdit] = useState(false);
  const [todo, setTodo] = useState(content);
  const dispatch = useDispatch();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (todo) {
        dispatch(handleEdit(todo, itemId));
        setIsEdit(false);
      } else {
        notification.info({
          message: "提示",
          description: "請輸入些甚麼吧~",
        });
      }
    }
  };

  const cancelEdit = () => {
    setTodo(content);
    setIsEdit(false);
  };

  return (
    <div className="todo-flex todo-justify-between todo-items-center todo-px-6 todo-pt-6">
      {!isEdit ? (
        <>
          <div className="todo-flex todo-flex-1 todo-border-b todo-border-[#E5E5E5] todo-pb-4">
            <img className="todo-cursor-pointer" src={checkbox} />
            <p
              className="todo-pl-4 todo-mb-0 todo-cursor-pointer hover:todo-decoration-1 hover:todo-underline"
              onClick={() => setIsEdit(true)}
            >
              {todo}
            </p>
          </div>
          <div className="todo-pl-4">
            <img className="todo-cursor-pointer todo-pb-4" src={closeItem} />
          </div>
        </>
      ) : (
        <>
          <div className="todo-flex todo-flex-1 todo-border-b todo-border-[#E5E5E5] todo-pb-4">
            <input
              className="todo-w-full todo-py-2 todo-pl-2 todo-border-2 todo-rounded todo-outline-0"
              type="text"
              value={todo}
              onKeyDown={handleKeyDown}
              onChange={(e) => setTodo(e.target.value)}
            />
          </div>
          <div className="todo-pl-4">
            <img
              className="todo-cursor-pointer todo-pb-4"
              onClick={() => cancelEdit()}
              src={closeItem}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
