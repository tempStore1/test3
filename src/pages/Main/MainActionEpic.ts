import { ofType } from "redux-observable";
import { createType, getTodosSuccess, getTodos } from "./MainAction";
import Resource from "./MainResource";
import { mergeMap, concat, from, catchError, of } from "rxjs";

const getTodosEpic = (action$: any) => {
  return action$.pipe(
    ofType(createType.MAIN_GET_TODOS),
    mergeMap(() => {
      return concat(
        from(Resource.getTodos()).pipe(
          mergeMap((response): any => {
            return concat(of(getTodosSuccess(response)));
          }),
          catchError((err): any => {
            console.log("err", err);
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
        from(Resource.addTodos({ todo })).pipe(
          mergeMap(() => {
            return concat(of(getTodos()));
          }),
          catchError((err): any => {
            console.log("err", err);
          })
        )
      );
    })
  );
};

export default [getTodosEpic, addTodoEpic];
