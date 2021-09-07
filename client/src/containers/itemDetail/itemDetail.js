import { connect } from "react-redux";
import * as homeStore from "../../store/home";
import ItemDetailComponent from "../../components/itemDetail";

const mapStateToProps = (state) => {
  const homeSelectors = homeStore.selectors(state);
  const { id: idSelected } = homeSelectors.getItemSelected();
  const {
    status,
    data: { item: itemSelected },
  } = homeSelectors.getItemDetail();
  const { list: categories } = homeSelectors.getCategories();

  if (!idSelected && status === "LOADED" && categories.length === 0) {
    categories.push(itemSelected.title);
  }

  return {
    idSelected,
    itemSelected,
    status,
    categories,
  };
};

export default connect(mapStateToProps, {
  itemDetailFetch: homeStore.actions.itemDetailFetch,
  setQuerySearch: homeStore.actions.setQuerySearch,
})(ItemDetailComponent);
