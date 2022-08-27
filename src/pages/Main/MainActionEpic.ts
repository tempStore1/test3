import { ofType } from "redux-observable";
import { createType, getTodosSuccess, getTodos } from "./MainAction";
import { LoginState } from "@/pages/Home/Login/LoginAction";
import * as LoadingAction from "@/components/Spin/SpinAction";
import Resource from "@/resource";
import { mergeMap, concat, from, catchError, of } from "rxjs";

const userLogoutEpic = (action$: any) => {
  return action$.pipe(
    ofType(createType.MAIN_USER_LOGOUT),
    mergeMap(() => {
      return concat(
        of(LoadingAction.loadingStatus(true)),
        from(Resource.MainResource.userLogout()).pipe(
          mergeMap((response): any => {
            if (response.status === 200) {
              const {
                data: { message },
              } = response;
              return concat(
                of(LoginState(message, false)),
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

const getTodosEpic = (action$: any) => {
  return action$.pipe(
    ofType(createType.MAIN_GET_TODOS),
    mergeMap(() => {
      return concat(
        of(LoadingAction.loadingStatus(true)),
        from(Resource.MainResource.getTodos()).pipe(
          mergeMap((response): any => {
            return concat(
              of(getTodosSuccess(response)),
              of(LoadingAction.loadingStatus(false))
            );
          }),
          catchError((err): any => {
            console.log("err", err);
            return concat(of(LoadingAction.loadingStatus(false)));
          })
        )
      );
    })
  );
};

const addTodoEpic = (action$: any) => {
  return action$.pipe(
    ofType(createType.MAIN_ADD_TODOS),
    mergeMap((payload: any) => {
      const todo = { content: payload.content };
      return concat(
        of(LoadingAction.loadingStatus(true)),
        from(Resource.MainResource.addTodos({ todo })).pipe(
          mergeMap(() => {
            return concat(
              of(getTodos()),
              of(LoadingAction.loadingStatus(false))
            );
          }),
          catchError((err): any => {
            console.log("err", err);
            return concat(of(LoadingAction.loadingStatus(false)));
          })
        )
      );
    })
  );
};

export default [userLogoutEpic, getTodosEpic, addTodoEpic];
