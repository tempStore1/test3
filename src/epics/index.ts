import { combineEpics } from "redux-observable";
import WaifuActionEpics from "@/pages/Waifu/WaifuActionEpic";

const rootEpic = combineEpics(...WaifuActionEpics);

export default rootEpic;
