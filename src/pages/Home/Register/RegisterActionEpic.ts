import { ofType } from "redux-observable";
import { createType, userRegisterStatus } from "./RegisterAction";
import * as LoadingAction from "@/components/Spin/SpinAction";
import Resource from "@/resource";
import { catchError, concat, from, mergeMap, of } from "rxjs";

const userRegisterEpic = (action$: any) => {
  return action$.pipe(
    ofType(createType.USER_REGISTER),
    mergeMap((payload) => {
      return concat(
        of(LoadingAction.loadingStatus(true)),
        from(Resource.RegisterResource.userRegister(payload.user)).pipe(
          mergeMap((response): any => {
            if (response.status === 201) {
              const {
                data: { message },
              } = response;
              return concat(
                of(userRegisterStatus(message)),
                of(LoadingAction.loadingStatus(false))
              );
            } else {
              return concat(of(LoadingAction.loadingStatus(false)));
            }
          }),
          catchError((err): any => {
            console.error(err);
          })
        )
      );
    })
  );
};

export default [userRegisterEpic];
