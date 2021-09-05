export default function (globalState) {
  const state = globalState.homeReducer;

  const getItemList = () => state.itemList;
  const getQueryType = () => state.queryType;

  return {
    getItemList,
    getQueryType,
  };
}
