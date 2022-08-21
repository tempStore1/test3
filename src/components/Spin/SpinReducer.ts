import { handleActions } from "redux-actions";
import { createType } from "./SpinAction";

export const initState = {
  isLoading: false,
};

export default handleActions(
  {
    [createType.LOADING_STATUS]: (state, payload: any) => {
      const { isLoading } = payload;
      return {
        ...state,
        isLoading: isLoading,
      };
    },
  },
  initState
);
