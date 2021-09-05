import { combineReducers } from "redux";
import at from "../types";
import { INITIAL_STATE } from "../../../static/data";

export const querySearch = (state = INITIAL_STATE.query, action) => {
  switch (action.type) {
    case at.GET_QUERY_SEARCH: {
      return { ...state };
    }
    case at.SET_QUERY_SEARCH: {
      return action.payload;
    }
    default:
      return state;
  }
};

export const itemList = (state = INITIAL_STATE.itemList, action) => {
  switch (action.type) {
    case at.FETCH_ITEM_LIST: {
      return { ...state };
    }
    default:
      return state;
  }
};

export default combineReducers({
  querySearch,
  itemList,
});
