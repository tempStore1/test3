import tick from "@/assets/Image/tick.svg";
import checkbox from "@/assets/Image/checkbox.svg";
import closeItem from "@/assets/Image/closeItem.svg";

const TodoItem = ({ content }: { content: string }) => {
  return (
    <div className="todo-flex todo-justify-between todo-items-center todo-px-6 todo-pt-6">
      <div className="todo-flex todo-flex-1 todo-border-b todo-border-[#E5E5E5] todo-pb-4">
        <img className="todo-cursor-pointer" src={checkbox} />
        <p className="todo-pl-4 todo-mb-0">{content}</p>
      </div>
      <div className="todo-pl-4">
        <img className="todo-cursor-pointer todo-pb-4" src={closeItem} />
      </div>
    </div>
  );
};

export default TodoItem;
