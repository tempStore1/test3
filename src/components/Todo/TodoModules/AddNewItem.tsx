import addBtn from "@/assets/image/add.svg";
import { useDispatch } from "react-redux";

interface AddNewItemProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  pushSomeThing: any;
}

const AddNewItem = ({
  value,
  onChange: addItem,
  pushSomeThing,
}: AddNewItemProps) => {
  const dispatch = useDispatch();
  return (
    <div className="todo-w-full todo-shadow-[0_0_15px_0_rgba(0,0,0,0.15)] todo-flex todo-items-center todo-bg-white todo-rounded-lg">
      <input
        value={value}
        onChange={(e) => addItem(e.target.value)}
        className="todo-rounded-l-lg todo-text-[#9F9A91] todo-w-full todo-h-full todo-py-3 todo-px-4"
        placeholder="新增代辦事項"
      />
      <img
        src={addBtn}
        alt="新增按鈕"
        className="todo-cursor-pointer todo-pr-1 todo-py-1"
        onClick={() => dispatch(pushSomeThing(value))}
      />
    </div>
  );
};

export default AddNewItem;
