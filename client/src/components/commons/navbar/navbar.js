import React from "react";
import PropTypes from "prop-types";
import LogoComponent from "../logo";
import SearchFormComponent from "../searchForm";
import {
  NavbarContent,
  Container,
  NavbarWrapper,
  LogoWrapper,
  FormWrapper,
} from "./navbar.styled";

const NavbarComponent = () => {
  return (
    <NavbarContent>
      <Container>
        <NavbarWrapper>
          <LogoWrapper>
            <LogoComponent />
          </LogoWrapper>
          <FormWrapper>
            <SearchFormComponent />
          </FormWrapper>
        </NavbarWrapper>
      </Container>
    </NavbarContent>
  );
};

NavbarComponent.propTypes = {};

NavbarComponent.defaultProps = {};

export default NavbarComponent;
