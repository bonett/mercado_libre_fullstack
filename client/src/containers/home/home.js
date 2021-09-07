import { connect } from "react-redux";
import * as homeStore from "../../store/home";
import HomeComponent from "../../components/home";

const mapStateToProps = (state) => {
  const homeSelectors = homeStore.selectors(state);
  const { q } = homeSelectors.getQuerySearch();
  const { id: idSelected } = homeSelectors.getItemSelected();
  const {
    status,
    data: { item: itemSelected },
  } = homeSelectors.getItemDetail();
  const { list: categories } = homeSelectors.getCategories();

  let newQuery = "";

  if (!idSelected && status === "LOADED" && categories.length === 0) {
    newQuery = itemSelected.title;
  }

  return {
    query:
      !idSelected && status === "LOADED" && categories.length === 0
        ? newQuery
        : q,
  };
};

export default connect(mapStateToProps, {
  setQuerySearch: homeStore.actions.setQuerySearch,
})(HomeComponent);
