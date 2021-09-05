export default function (globalState) {
  const state = globalState.homeReducer;

  const getItemList = () => state.itemList;
  const getQuerySearch = () => state.querySearch;

  return {
    getItemList,
    getQuerySearch,
  };
}
