import { combineReducers } from "redux";
import spinReducer from "@/components/Spin/SpinReducer";
import mainReducer from "@/pages/Main/MainReducer";
import loginReducer from "@/pages/Home/Login/LoginReducer";
import registerReducer from "@/pages/Home/Register/RegisterReducer";

const rootReducer = () =>
  combineReducers({
    spinReducer,
    mainReducer,
    loginReducer,
    registerReducer,
  });

export default rootReducer;
