import { combineReducers } from "redux";
import at from "../types";
import { itemInitialStates } from "../../../config";

export const querySearch = (state = itemInitialStates.queryString, action) => {
  switch (action.type) {
    case at.GET_QUERY_SEARCH: {
      return { ...state };
    }
    case at.SET_QUERY_SEARCH: {
      return {
        ...state,
        q: action.payload,
      };
    }
    default:
      return state;
  }
};

export const itemList = (state = itemInitialStates.itemList, action) => {
  switch (action.type) {
    case at.ITEM_LIST_FETCH: {
      return {
        ...state,
        status: "LOADING",
      };
    }
    case at.ITEM_LIST_SUCCESS: {
      return {
        ...state,
        data: action.itemList,
        status: "LOADED",
      };
    }
    case at.ITEM_LIST_FAILURE: {
      return {
        ...state,
        status: "FAILED",
      };
    }
    case at.ITEM_LIST_DENIED: {
      return {
        ...state,
        data: [],
        status: "LOADED",
      };
    }
    default:
      return state;
  }
};

export default combineReducers({
  querySearch,
  itemList,
});
