import * as React from "react";
import Person from "@/assets/Image/person.svg";
import Online from "@/assets/Image/online.svg";
import Checkout from "@/assets/Image/checkout.svg";

export const Logo = () => {
  return (
    <div className="todo-text-center">
      <img src={Checkout} alt="裝飾標題相片" className="todo-inline-block" />
      <img src={Online} alt="裝飾標題相片" className="todo-inline-block" />
    </div>
  );
};

const DecorateBox = () => {
  return (
    <div className="todo-flex todo-flex-col todo-content-center todo-justify-center">
      <Logo />
      <img
        src={Person}
        alt="裝飾人物相片"
        className="todo-mx-auto  todo-mt-4"
      />
    </div>
  );
};

export default DecorateBox;
