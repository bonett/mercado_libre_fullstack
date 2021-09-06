import { connect } from "react-redux";
import * as homeStore from "../../store/home";
import HomeComponent from "../../components/home";

function mapStateToProps(state) {
  const homeSelectors = homeStore.selectors(state);
  const itemList = homeSelectors.getItemList();

  return {
    itemList,
  };
}

export default connect(mapStateToProps, {})(HomeComponent);
