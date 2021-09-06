import { takeEvery } from "redux-saga/effects";
import at from "../types";
import fetchItemList from "./fetchItemList";
/* import fetchItemDetail from "./fetchItemDetail"; */

export default function* root() {
  yield takeEvery(at.ITEM_LIST_FETCH, fetchItemList);
  /* yield takeEvery(at.FETCH_ITEM_DETAIL, fetchItemDetail); */
}
