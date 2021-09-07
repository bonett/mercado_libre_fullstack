import { connect } from "react-redux";
import * as homeStore from "../../store/home";
import ItemDetailComponent from "../../components/itemDetail";

function mapStateToProps(state) {
  const homeSelectors = homeStore.selectors(state);
  const {
    data: { categories },
  } = homeSelectors.getItemList();
  const {
    data: { item: itemSelected },
    status,
  } = homeSelectors.getItemDetail();

  return {
    itemSelected,
    status,
    categories,
  };
}

export default connect(mapStateToProps, {})(ItemDetailComponent);
