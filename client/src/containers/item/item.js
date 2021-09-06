import { connect } from "react-redux";
import * as homeStore from "../../store/home";
import ItemComponent from "../../components/item";

function mapStateToProps(state) {
  const homeSelectors = homeStore.selectors(state);
  const { q } = homeSelectors.getQuerySearch();
  const {
    data: { author, categories, items },
    status,
  } = homeSelectors.getItemList();

  return {
    query: q,
    categories,
    author,
    items,
    status,
  };
}

export default connect(mapStateToProps, {
  itemListFetch: homeStore.actions.itemListFetch,
})(ItemComponent);
