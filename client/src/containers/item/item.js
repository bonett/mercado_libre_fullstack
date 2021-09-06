import { connect } from "react-redux";
import * as homeStore from "../../store/home";
import ItemComponent from "../../components/item";

function mapStateToProps(state) {
  const homeSelectors = homeStore.selectors(state);
  const { q } = homeSelectors.getQuerySearch();

  return {
    query: q,
  };
}

export default connect(mapStateToProps, {
  itemListFetch: homeStore.actions.itemListFetch,
})(ItemComponent);
