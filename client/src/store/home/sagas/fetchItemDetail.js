import { put, call } from "redux-saga/effects";
import * as api from "../../../api/fetchItemDetail";
import at from "../types";

export default function* fetchItemDetail(params) {
  try {
    const { data } = yield call(api.fetchItemDetail, params);
    yield put({
      type: at.ITEM_SELECTED_SUCCESS,
      data,
    });
  } catch (error) {
    yield put({
      type: at.ITEM_SELECTED_FAILURE,
    });
  }
}
