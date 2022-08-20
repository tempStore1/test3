const TodoFooter = () => {
  return (
    <div className="todo-flex todo-justify-between todo-items-center todo-p-6">
      <p>5 個待完成項目</p>
      <button type="button" className="todo-pr-4 todo-text-[#9F9A91]">
        清空已完成項目
      </button>
    </div>
  );
};

export default TodoFooter;
