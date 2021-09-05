import { connect } from "react-redux";
import * as homeStore from "../../store/home";
import AppComponent from "../../components/app";

function mapStateToProps(state) {
  const homeSelectors = homeStore.selectors(state);
  const { q } = homeSelectors.getQuerySearch();

  return {
    query: q,
  };
}

export default connect(mapStateToProps, {
  setQuerySearch: homeStore.actions.setQuerySearch,
})(AppComponent);
