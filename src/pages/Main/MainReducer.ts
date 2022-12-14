import { handleActions } from "redux-actions";
import { createType } from "./MainAction";

export const initState = {
  todos: [] as string[],
};

export default handleActions(
  {
    [createType.MAIN_GET_TODOS_SUCCESS]: (state, payload) => {
      return {
        ...state,
        todos: payload.todos,
      };
    },
  },
  initState
);
