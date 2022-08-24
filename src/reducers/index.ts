import { combineReducers } from "redux";
import spinReducer from "@/components/Spin/SpinReducer";
import mainReducer from "@/pages/Main/MainReducer";

const rootReducer = () =>
  combineReducers({
    spinReducer,
    mainReducer,
  });

export default rootReducer;
