import at from "../types";

const getQuerySearch = () => ({
  type: at.GET_QUERY_SEARCH,
});

const setQuerySearch = (payload) => ({
  type: at.SET_QUERY_SEARCH,
  payload,
});

const fetchItemListByParam = (payload) => ({
  type: at.FETCH_ITEM_LIST,
  payload,
});

const setItemByID = (payload) => {
  return {
    type: at.SET_ITEM_SELECTED,
    payload,
  };
};

export default {
  getQuerySearch,
  setQuerySearch,
  setItemByID,
  fetchItemListByParam,
};
