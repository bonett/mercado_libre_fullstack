import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavbarComponent from "../commons/navbar";
import HomeContainer from "../../containers/home";
import { AppSection } from "./app.styled";

class AppComponent extends Component {
  render() {
    return (
      <AppSection>
        <NavbarComponent />
        <Switch>
          <Route path="" component={() => <HomeContainer />} />
        </Switch>
      </AppSection>
    );
  }
}

export default AppComponent;
