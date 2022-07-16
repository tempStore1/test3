import { ofType } from "redux-observable";
import {
  actionCreator,
  getWaifuInfo,
  getWaifuInfoSuccess,
} from "./WaifuAction";
import Resource from "@/resource";
import { mergeMap, Observable, of, from, catchError, concat } from "rxjs";

const getWaifuInfoEpic = (action$: any, state$: any): Observable<any> => {
  return action$.pipe(
    ofType(actionCreator.GET___WAIFU_INFO),
    mergeMap((action: any): any => {
      return concat(
        from(Resource.WaifuResource.getRandomData()).pipe(
          mergeMap((response): any => {
            return concat(of(getWaifuInfoSuccess(response)));
          }),
          catchError((error) => {
            return concat(of(`error => ${error}`));
          })
        )
      );
    })
  );
};

export default [getWaifuInfoEpic];
