import { connect } from "react-redux";
import * as homeStore from "../../store/home";
import ItemDetailComponent from "../../components/itemDetail";

function mapStateToProps(state) {
  const homeSelectors = homeStore.selectors(state);
  const {
    data: { categories },
  } = homeSelectors.getItemList();
  const {
    status,
    data: { item: itemSelected },
  } = homeSelectors.getItemDetail();

  return {
    itemSelected,
    status,
    categories,
  };
}

export default connect(mapStateToProps, {
  setQuerySearch: homeStore.actions.setQuerySearch,
  itemDetailFetch: homeStore.actions.itemDetailFetch,
})(ItemDetailComponent);
