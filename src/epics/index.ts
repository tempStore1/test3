import { combineEpics } from "redux-observable";
import MainActionEpic from "@/pages/Main/MainActionEpic";

const rootEpic = combineEpics(...MainActionEpic);

export default rootEpic;
