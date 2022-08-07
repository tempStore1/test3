import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux";
import epicMiddleware from "@/middleware";
import rootEpic from "@/epics";
import type { Store } from "redux";
import rootReducer from "@/reducers";

// applyMiddleware 實際運作參考
// https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/exploring-redux-middleware-b63b1fc4485f

function logger({ getState }: { getState: any }) {
  if (process.env.NODE_ENV === "development") {
    return (next: any) => (action: any) => {
      // logger 被呼叫後第一個傳入的參數會是下一個 middleware。
      // 該 middleware 會做甚麼事情就放在 action 裡面。
      console.log("will dispatch", action);

      const returnValue = next(action);

      console.log("state after dispatch", getState());

      return returnValue;
    };
  }
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
