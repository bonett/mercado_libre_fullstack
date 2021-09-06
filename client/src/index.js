import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { meli_light } from "./theme";
import reportWebVitals from "./reportWebVitals";
import AppContainer from "./containers/app";
import { ThemeProvider } from "styled-components";
import ScrollToTop from "./hoc/scrollToTop";
import { store } from "./store/configureStore";
import "./theme/utilities/global.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={"/"}>
        <ThemeProvider theme={meli_light}>
          <ScrollToTop>
            <AppContainer />
          </ScrollToTop>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
