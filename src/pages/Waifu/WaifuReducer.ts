import { actionCreator as actions } from "./WaifuAction";
import { handleActions } from "redux-actions";

// 初始資料格式
export type initStateType = {
  tag?: string;
  test?: string;
  waifuInfo: object;
};

const initState: initStateType = {
  tag: "",
  test: "尚未測試",
  waifuInfo: {},
};

export default handleActions(
  {
    [actions.TEST]: (state) => {
      return {
        ...state,
        test: "發送 action 成功",
      };
    },
    [actions.GET___WAIFU_INFO_SUCCESS]: (state, payload) => {
      return {
        ...state,
        waifuInfo: payload.waifuInfo,
      };
    },
  },
  initState
);
