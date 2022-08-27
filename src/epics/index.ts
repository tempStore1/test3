import { combineEpics } from "redux-observable";
import MainActionEpic from "@/pages/Main/MainActionEpic";
import LoginActionEpic from "@/pages/Home/Login/LoginActionEpic";
import RegisterActionEpic from "@/pages/Home/Register/RegisterActionEpic";

const rootEpic = combineEpics(
  ...MainActionEpic,
  ...LoginActionEpic,
  ...RegisterActionEpic
);

export default rootEpic;
