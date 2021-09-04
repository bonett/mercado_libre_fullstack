import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { MELI_THEME } from "./theme";
import reportWebVitals from "./reportWebVitals";
import HomeContainer from "./containers/home";
import { ThemeProvider } from "styled-components";
import ScrollToTop from "./hoc/scrollToTop";
import { store } from "./store/configureStore";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={"/"}>
        <ThemeProvider theme={MELI_THEME}>
          <ScrollToTop>
            <Switch>
              <Route path="" component={() => <HomeContainer />} />
            </Switch>
          </ScrollToTop>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
