import addBtn from "@/assets/image/add.svg";

const AddNewItem = () => {
  return (
    <div className="todo-w-full todo-shadow-[0_0_15px_0_rgba(0,0,0,0.15)] todo-flex todo-items-center todo-bg-white todo-rounded-lg">
      <input
        className="todo-rounded-l-lg todo-text-[#9F9A91] todo-w-full todo-h-full todo-py-3 todo-px-4"
        placeholder="新增代辦事項"
      />
      <img
        src={addBtn}
        alt="新增按鈕"
        className="todo-cursor-pointer todo-pr-1 todo-py-1"
      />
    </div>
  );
};

export default AddNewItem;
