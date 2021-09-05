import at from "../types";

const getQueryType = () => ({
  type: at.GET_QUERY_TYPE,
});

const setQueryType = (payload) => ({
  type: at.SET_QUERY_TYPE,
  payload,
});

const fetchItemListByParam = (payload) => ({
  type: at.FETCH_ITEM_LIST,
  payload,
});

export default {
  getQueryType,
  setQueryType,
  fetchItemListByParam,
};
