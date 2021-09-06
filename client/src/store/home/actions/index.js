import at from "../types";

export const setQuerySearch = (payload) => ({
  type: at.SET_QUERY_SEARCH,
  payload,
});

export const itemListFetch = (payload) => ({
  type: at.ITEM_LIST_FETCH,
  payload,
});

export const itemListDeny = () => ({
  type: at.ITEM_LIST_DENY,
});
