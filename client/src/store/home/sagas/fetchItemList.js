import { put, call } from "redux-saga/effects";
import * as api from "../../../api/fetchItemList";
import at from "../types";

export default function* fetchItemList(params) {
  try {
    const data = yield call(api.fetchItemList, params);
    yield put({
      type: at.ITEM_LIST_SUCCESS,
      data,
    });
  } catch (error) {
    yield put({
      type: at.ITEM_LIST_FAILURE,
    });
  }
}
