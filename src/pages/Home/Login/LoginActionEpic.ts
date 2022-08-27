import { ofType } from "redux-observable";
import { createType, LoginState } from "./LoginAction";
import * as LoadingAction from "@/components/Spin/SpinAction";
import Resource from "@/resource";
import { catchError, concat, from, mergeMap, of } from "rxjs";

const userLoginEpic = (action$: any) => {
  return action$.pipe(
    ofType(createType.USER_LOGIN),
    mergeMap((payload) => {
      return concat(
        of(LoadingAction.loadingStatus(true)),
        from(Resource.LoginResource.userLogin(payload.user)).pipe(
          mergeMap((response): any => {
            if (response.status === 200) {
              const {
                headers,
                data: { message },
              } = response;
              const token = headers.authorization;
              localStorage.setItem("userInfo", JSON.stringify(response.data));
              localStorage.setItem("token", token);
              return concat(
                of(LoginState(message, true)),
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

export default [userLoginEpic];
