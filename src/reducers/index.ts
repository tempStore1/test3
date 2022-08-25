import { combineReducers } from "redux";
import spinReducer from "@/components/Spin/SpinReducer";
import mainReducer from "@/pages/Main/MainReducer";
import loginReducer from "@/pages/Home/Login/LoginReducer";

const rootReducer = () =>
  combineReducers({
    spinReducer,
    mainReducer,
    loginReducer,
  });

export default rootReducer;
