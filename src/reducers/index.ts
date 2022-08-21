import { combineReducers } from "redux";
import spinReducer from "@/components/Spin/SpinReducer";

const rootReducer = () =>
  combineReducers({
    spinReducer,
  });

export default rootReducer;
