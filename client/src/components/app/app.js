import React from "react";
import { withRouter } from "react-router";
import { Route, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import HomeContainer from "../../containers/home";
import ItemContainer from "../../containers/item";
import ItemDetailContainer from "../../containers/itemDetail";

import NavbarComponent from "../commons/navbar";
import { AppSection } from "./app.styled";

const AppComponent = ({ history, query, setQuerySearch }) => {
  const handleSearchButton = () => {
    setQuerySearch(query);
  };

  const handleInputSearch = (e) => {
    const {
      keyCode,
      target: { value },
    } = e;

    e.preventDefault();

    setQuerySearch(value);

    if (keyCode === 13) {
      history.push(`/items?search=${query}`);
    }
  };

  const handleRedirectHome = () => {
    setQuerySearch("");
    history.push("/");
  };

  return (
    <AppSection>
      <NavbarComponent
        query={query}
        redirectToHome={handleRedirectHome}
        handleInputSearch={handleInputSearch}
        handleSearchButton={handleSearchButton}
      />
      <Switch>
        <Route path="" component={() => <HomeContainer />} />
        <Route exact path="/items" component={() => <ItemContainer />} />
        <Route path="/items/:id" component={() => <ItemDetailContainer />} />
        <Redirect to={"/"} />
      </Switch>
    </AppSection>
  );
};

AppComponent.propTypes = {
  query: PropTypes.string,
  history: PropTypes.object,
  setQuerySearch: PropTypes.func.isRequired,
};

AppComponent.defaultProps = {
  history: {},
  setQuerySearch: () => {},
};

export default withRouter(AppComponent);
