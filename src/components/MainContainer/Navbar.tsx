import { Logo } from "@/components/HomeContainer/DecorateBox";

const UserAccount = () => {
  return (
    <div className="todo-flex todo-justify-center todo-align-center">
      <h2 className="todo-font-bold todo-text-base todo-mr-4">王曉明的代辦</h2>
      <button type="button" className="">
        登出
      </button>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="todo-flex todo-justify-between todo-items-center">
      <Logo />
      <UserAccount />
    </div>
  );
};

export default Navbar;
