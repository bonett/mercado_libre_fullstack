import { put, call } from "redux-saga/effects";
import * as api from "../../../api/fetchItemListByParam";
import at from "../types";

export default function* fetchItemList(params) {
  try {
    const results = yield call(api.fetchItemListByParam, params);
    console.log(results);

    yield put({
      type: at.FETCH_SUCCESS_POPULAR_VIDEOS,
      itemList: [],
    });
  } catch (error) {
    yield put({
      type: at.FETCH_FAILURE_POPULAR_VIDEOS,
      error,
    });
  }
}
