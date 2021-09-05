import { put, call } from "redux-saga/effects";
import * as api from "../../../api/fetchItemDetail";
import at from "../types";

export default function* fetchItemListDetail(params) {
  try {
    const results = yield call(api.fetchItemDetail, params);
    console.log(results);

    yield put({
      type: at.FETCH_ITEM_DETAIL_SUCCESS,
      itemList: [],
    });
  } catch (error) {
    yield put({
      type: at.FETCH_ITEM_DETAIL_FAILURE,
      error,
    });
  }
}
