import { combineReducers } from "redux";
import { rootReducer as homeReducer } from "./home";

const rootReducer = combineReducers({
  homeReducer,
});

export default rootReducer;
