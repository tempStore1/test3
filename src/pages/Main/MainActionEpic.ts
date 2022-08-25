import { ofType } from "redux-observable";
import { createType, getTodosSuccess, getTodos } from "./MainAction";
import * as LoadingAction from "@/components/Spin/SpinAction";
import Resource from "./MainResource";
import { mergeMap, concat, from, catchError, of } from "rxjs";

const getTodosEpic = (action$: any) => {
  return action$.pipe(
    ofType(createType.MAIN_GET_TODOS),
    mergeMap(() => {
      return concat(
        of(LoadingAction.loadingStatus(true)),
        from(Resource.getTodos()).pipe(
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
        from(Resource.addTodos({ todo })).pipe(
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

export default [getTodosEpic, addTodoEpic];
