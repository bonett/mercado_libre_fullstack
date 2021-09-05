import { fork } from "redux-saga/effects";
import { rootSaga as HomeSaga } from "./home";

export default function* rootSaga() {
  yield fork(HomeSaga);
}
