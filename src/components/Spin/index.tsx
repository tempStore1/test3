import { Spin } from "antd";
import * as React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";

const FullPageSpin: React.FC = () => {
  const isLoading = useSelector(
    (state: RootState) => state.spinReducer.isLoading
  );

  return (
    <div
      style={{
        display: isLoading ? "block" : "none",
      }}
      className="todo-w-full todo-h-screen todo-bg-[#0005] todo-absolute"
    >
      <div className="todo-absolute todo-top-1/2 todo-left-1/2 -todo-translate-x-1/2 -todo-translate-y-1/2">
        <Spin spinning={isLoading} size="large" tip="Loading..." />
      </div>
    </div>
  );
};

export default FullPageSpin;
