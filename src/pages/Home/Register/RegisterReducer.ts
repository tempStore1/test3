import { handleActions } from "redux-actions";
import { createType } from "./RegisterAction";

export const initState = {
  registerState: "",
};

export default handleActions(
  {
    [createType.USER_REGISTER_STATUS]: (state, payload) => {
      return {
        ...state,
        registerState: payload.message,
      };
    },
  },
  initState
);
