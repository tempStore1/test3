import { legacy_createStore as createStore, combineReducers } from "redux";
import epicMiddleware from "@/middleware";
import rootEpic from "@/epics";
import WaifuReducer from "@/pages/Waifu/WaifuReducer";

const multipleReducer = combineReducers({
  WaifuReducer,
});

const store = createStore(
  multipleReducer,
  // 啟動 redux devtools
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

epicMiddleware.run(rootEpic);

export default store;
