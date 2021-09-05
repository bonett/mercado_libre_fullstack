import { connect } from "react-redux";
/* import * as homeStore from "../../store/home"; */
import ItemDetailComponent from "../../components/itemDetail";

function mapStateToProps(state) {
  /* const homeSelectors = homeStore.selectors(state);
  const { q } = homeSelectors.getQuery();
  const itemList = homeSelectors.getItemList(); */

  return {
    /* queryParam: q,
    itemList, */
  };
}

export default connect(mapStateToProps, {
  /* fetchItemListByParam: homeStore.actions.fetchItemListByParam,
  setQueryParam: homeStore.actions.setQueryType, */
})(ItemDetailComponent);
