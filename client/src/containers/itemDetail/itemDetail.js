import { connect } from "react-redux";
import * as homeStore from "../../store/home";
import ItemDetailComponent from "../../components/itemDetail";

function mapStateToProps(state) {
  const homeSelectors = homeStore.selectors(state);
  const { categories } = homeSelectors.getItemList();
  const {
    data: { item },
    status,
  } = homeSelectors.getItemList();

  return {
    itemSelected: item,
    status,
    categories,
  };
}

export default connect(mapStateToProps, {})(ItemDetailComponent);
