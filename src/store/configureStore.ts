import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux";
import epicMiddleware from "@/middleware";
import rootEpic from "@/epics";
import type { Store } from "redux";
import rootReducer from "@/reducers";
// import logger from "redux-logger";

// applyMiddleware 實際運作參考
// https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/exploring-redux-middleware-b63b1fc4485f

function logger({ getState }: { getState: any }) {
  return (next: any) => (action: any) => {
    // 一個 curry function
    // next 會不斷指向下一個 middleware。
    // 先照抄官網，等了解 curry function 後再來寫註解。
    console.log("will dispatch", action);

    const returnValue = next(action);

    console.log("state after dispatch", getState());

    return returnValue;
  };
}

export default function configureStore(history: any, preloadedState = {}) {
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middleware = [epicMiddleware, logger];

  const enhancers = composeEnhancers(applyMiddleware(...middleware));

  const store: Store = createStore(rootReducer(), preloadedState, enhancers);

  epicMiddleware.run(rootEpic);
  return store;
}
