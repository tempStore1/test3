import nodata from "@/assets/Image/nodata.svg";

const NoTodos = () => {
  return (
    <div className="todo-flex todo-flex-col todo-justify-center todo-items-center todo-mt-16">
      <p className="todo-text-2xl todo-leading-6 todo-font-bold">
        目前尚無代辦事項
      </p>
      <img className="" src={nodata} alt="沒 Todo 資料" />
    </div>
  );
};

export default NoTodos;
