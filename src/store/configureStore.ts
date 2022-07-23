import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux";
import epicMiddleware from "@/middleware";
import rootEpic from "@/epics";
import type { Store } from "redux";
import rootReducer from "@/reducers";
import logger from "redux-logger";

export default function configureStore(history: any, preloadedState = {}) {
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middleware = [epicMiddleware, logger];

  const enhancers = composeEnhancers(applyMiddleware(...middleware));

  const store: Store = createStore(rootReducer(), preloadedState, enhancers);

  epicMiddleware.run(rootEpic);
  return store;
}
