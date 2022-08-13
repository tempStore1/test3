import Input from "./Input";
import Header from "./header";
import Button from "./Button";

const Form = (props: any) => {
  return <form className="todo-p-12">{props.children}</form>;
};

export { Input, Header, Button };
export default Form;
