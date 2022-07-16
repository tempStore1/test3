import configureStore from "./configureStore";
import { createHashHistory } from "history";
export const history = createHashHistory();
export const store = configureStore(history);
