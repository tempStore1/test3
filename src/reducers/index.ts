import { combineReducers } from "redux";
import WaifuReducer from "@/pages/Waifu/WaifuReducer";
import { connectRouter } from "connected-react-router";

const rootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    WaifuReducer,
  });

export default rootReducer;
