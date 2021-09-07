import React from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";

import HomeContainer from "../../containers/home";
import ItemContainer from "../../containers/item";
import ItemDetailContainer from "../../containers/itemDetail";

import { AppSection } from "./app.styled";

const AppComponent = () => {
  return (
    <AppSection>
      <BrowserRouter>
        <Route exact path="" component={() => <HomeContainer />} />
        <Route exact path="/items" component={() => <ItemContainer />} />
        <Route
          exact
          path="/items/:id"
          component={() => <ItemDetailContainer />}
        />
      </BrowserRouter>
    </AppSection>
  );
};

export default AppComponent;
