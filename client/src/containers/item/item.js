import { connect } from "react-redux";
import * as homeStore from "../../store/home";
import ItemComponent from "../../components/item";

function mapStateToProps(state) {
  const homeSelectors = homeStore.selectors(state);
  const { q } = homeSelectors.getQuerySearch();
  const {
    data: { categories, items },
    status,
  } = homeSelectors.getItemList();
  return {
    query: q,
    categories,
    items,
    status,
  };
}

export default connect(mapStateToProps, {
  itemListFetch: homeStore.actions.itemListFetch,
  setItemSelected: homeStore.actions.setItemSelected,
  itemDetailFetch: homeStore.actions.itemDetailFetch,
  setQuerySearch: homeStore.actions.setQuerySearch,
})(ItemComponent);
