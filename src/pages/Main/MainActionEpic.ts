import { ofType } from "redux-observable";
import { createType, getTodosSuccess } from "./MainAction";
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

export default [getTodosEpic];
