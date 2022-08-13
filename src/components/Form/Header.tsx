const Header = (props: { children?: string }) => {
  return (
    <h1 className="todo-mb-6 todo-font-bold todo-text-2xl">{props.children}</h1>
  );
};

export default Header;
