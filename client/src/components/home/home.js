import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import NavbarComponent from "../commons/navbar";

import { HomeSection } from "./home.styled";

const HomeComponent = ({ history, query, setQuerySearch }) => {
  const handleSearchButton = (e) => {
    e.preventDefault();
    if (query !== "") {
      setQuerySearch(query);
      setTimeout(() => {
        history.push(`/items?search=${query}`);
      }, 300);
    }
  };

  const handleInputSearch = (e) => {
    const {
      target: { value },
    } = e;
    setQuerySearch(value);
  };

  const handleRedirectHome = () => {
    setQuerySearch("");
    history.push("/");
  };
  return (
    <HomeSection>
      <NavbarComponent
        query={query}
        redirectToHome={handleRedirectHome}
        handleInputSearch={handleInputSearch}
        handleSearchButton={handleSearchButton}
      />
    </HomeSection>
  );
};

HomeComponent.propTypes = {
  query: PropTypes.string,
  history: PropTypes.object,
  setQuerySearch: PropTypes.func.isRequired,
};

HomeComponent.defaultProps = {
  history: {},
  setQuerySearch: () => {},
};

export default withRouter(HomeComponent);
