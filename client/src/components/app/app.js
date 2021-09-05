import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import NavbarComponent from "../commons/navbar";
import HomeContainer from "../../containers/home";
import { AppSection } from "./app.styled";

class AppComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleLogoClick = this.handleLogoClick.bind(this);
    this.handleInputSearch = this.handleInputSearch.bind(this);
    this.handleSearchButton = this.handleSearchButton.bind(this);
  }

  handleLogoClick() {
    const { history } = this.props;
    history.push(`/`);
  }

  handleInputSearch(e) {
    const {
      target: { value },
    } = e;

    console.log(value);
  }

  handleSearchButton() {
    console.log("clicked");
  }

  render() {
    return (
      <AppSection>
        <NavbarComponent
          /* searchValue={query} */
          redirectToHome={this.handleLogoClick}
          handleInputSearch={this.handleInputSearch}
          handleSearchButton={this.handleSearchButton}
        />
        <Switch>
          <Route path="" component={() => <HomeContainer />} />
        </Switch>
      </AppSection>
    );
  }
}

AppComponent.propTypes = {
  history: PropTypes.object,
};

AppComponent.defaultProps = {
  history: {},
};

export default withRouter(AppComponent);
