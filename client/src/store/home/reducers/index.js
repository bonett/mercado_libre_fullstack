import { combineReducers } from "redux";
import at from "../types";

export const queryType = (state = { query: "" }, action) => {
  switch (action.type) {
    case at.GET_QUERY_TYPE: {
      return { ...state };
    }
    case at.SET_QUERY_TYPE: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default combineReducers({
  queryType,
});
