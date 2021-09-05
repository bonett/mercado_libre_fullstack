import { takeEvery } from "redux-saga/effects";
import at from "../types";
import fetchItemList from "./fetchItemList";
import fetchItemDetail from "./fetchItemDetail";

export default function* root() {
  yield takeEvery(at.FETCH_ITEM_LIST, fetchItemList);
  yield takeEvery(at.FETCH_ITEM_DETAIL, fetchItemDetail);
}
