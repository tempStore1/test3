import { combineEpics } from "redux-observable";
import MainActionEpic from "@/pages/Main/MainActionEpic";
import LoginActionEpic from "@/pages/Home/Login/LoginActionEpic";

const rootEpic = combineEpics(...MainActionEpic, ...LoginActionEpic);

export default rootEpic;
