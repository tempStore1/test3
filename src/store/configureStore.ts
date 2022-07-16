import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import epicMiddleware from "@/middleware";
import rootEpic from "@/epics";
import { routerMiddleware as createRouterMiddleware } from "connected-react-router";
import type { Store } from "redux";
import rootReducer from "@/reducers";

export default function configureStore(history: any, preloadedState = {}) {
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const routerMiddleware = createRouterMiddleware(history);

  const middleware = [routerMiddleware, epicMiddleware];

  const enhancers = composeEnhancers(applyMiddleware(...middleware));

  const store: Store = createStore(
    rootReducer(history),
    preloadedState,
    enhancers
  );

  epicMiddleware.run(rootEpic);
  return store;
}
