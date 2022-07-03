import { actionCreator as actions, test } from "./WaifuAction";

// 初始資料格式
type initStateType = {
  tag?: string;
  test?: string;
  waifuInfo: object;
};

// action 格式
type actionType = {
  type: string;
  payload?: object;
};

const initState: initStateType = {
  tag: "",
  test: "尚未測試",
  waifuInfo: {},
};

const WaifuReducer = (state = initState, action: actionType) => {
  switch (action.type) {
    case actions.TEST: {
      return {
        ...state,
        test: "發送 action 成功",
      };
    }
    default:
      return state;
  }
};

export default WaifuReducer;
