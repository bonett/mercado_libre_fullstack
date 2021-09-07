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

export const itemSelected = (
  state = itemInitialStates.itemSelected,
  action
) => {
  switch (action.type) {
    case at.GET_ITEM_SELECTED: {
      return { ...state };
    }
    case at.SET_ITEM_SELECTED: {
      return {
        ...state,
        id: action.payload,
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
        data: action.data,
        status: "LOADED",
      };
    }
    case at.ITEM_LIST_FAILURE: {
      return {
        ...state,
        data: itemInitialStates.itemList.data,
        status: "FAILED",
      };
    }
    default:
      return state;
  }
};

export const itemDetail = (state = itemInitialStates.itemDetail, action) => {
  switch (action.type) {
    case at.ITEM_SELECTED_FETCH: {
      return { ...state, status: "LOADING" };
    }
    case at.ITEM_SELECTED_SUCCESS: {
      return {
        ...state,
        data: action.data,
        status: "LOADED",
      };
    }
    case at.ITEM_SELECTED_FAILURE: {
      return {
        ...state,
        data: { item: null },
        status: "FAILED",
      };
    }
    default:
      return state;
  }
};

export default combineReducers({
  querySearch,
  itemList,
  itemSelected,
  itemDetail,
});
