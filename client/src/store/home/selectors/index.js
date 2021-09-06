export default function (globalState) {
  const state = globalState.homeReducer;

  const getQuerySearch = () => state.querySearch;
  const getItemList = () => state.itemList;

  return {
    getQuerySearch,
    getItemList,
  };
}
