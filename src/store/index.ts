import configureStore from "./configureStore";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();
export const store = configureStore(history);
