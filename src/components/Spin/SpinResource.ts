import { createType } from "@/components/Spin/SpinAction";

export const isLoading = (dispatch: any, payload: boolean) => {
  dispatch({
    type: createType.LOADING_STATUS,
    isLoading: payload,
  });
};
