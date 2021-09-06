export default function (globalState) {
  const state = globalState.homeReducer;

  const getQuerySearch = () => state.querySearch;
  const getItemList = () => state.itemList;
  const getItemSelected = () => state.itemSelected;
  const getItemDetail = () => state.itemDetail;

  return {
    getQuerySearch,
    getItemList,
    getItemSelected,
    getItemDetail,
  };
}
