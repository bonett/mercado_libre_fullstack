import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
/* import rootSaga from "./rootSaga"; */

const composeEnhancers =
  window.__REDUX_DEVTOOLS__EXTENSIONS__COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer
  /* composeEnhancers(applyMiddleware(rootSaga)) */
);

/* sagaMiddleware.run(rootSaga); */
