import React, { Component } from "react";
import NavbarComponent from "../commons/navbar/navbar";
import { HomeSection } from "./home.styled";

class HomeComponent extends Component {
  render() {
    return (
      <HomeSection>
        <NavbarComponent />
      </HomeSection>
    );
  }
}

export default HomeComponent;
