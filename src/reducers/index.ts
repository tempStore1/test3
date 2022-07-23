import { combineReducers } from "redux";
import WaifuReducer from "@/pages/Waifu/WaifuReducer";

const rootReducer = () =>
  combineReducers({
    WaifuReducer,
  });

export default rootReducer;
