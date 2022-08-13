const Input = (props: {
  title: string;
  value: string;
  errorMsg: string;
  placeholder?: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { title, value, errorMsg, placeholder, onChange: changeTo } = props;
  return (
    <div className="todo-mb-4">
      <p className="todo-font-bold todo-font-text-sm todo-leading-5 todo-mb-1">
        {title}
      </p>
      <input
        className="todo-px-3 todo-font-medium todo-text-base todo-py-4 todo-w-full todo-text-[#9F9A91] todo-leading-6	todo-rounded-lg todo-mb-1 todo-min-w-[300px] placeholder:todo-font-medium placeholder:todo-text-[#9F9A91]"
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => changeTo(e.target.value)}
      />
      <p className="todo-text-[#D87355] todo-font-bold todo-font-text-sm todo-leading-5">
        {errorMsg}
      </p>
    </div>
  );
};

export default Input;
