import { handleActions } from "redux-actions";
import { createType } from "./LoginAction";

export const initState = {
  loginState: false,
  loginMessage: "",
};

export default handleActions(
  {
    [createType.USER_LOGIN_STATE]: (state, payload) => {
      return {
        ...state,
        loginState: payload.state,
        loginMessage: payload.message,
      };
    },
  },
  initState
);
