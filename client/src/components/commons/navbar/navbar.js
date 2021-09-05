import React from "react";
import PropTypes from "prop-types";
import ContainerComponent from "../container";
import LogoComponent from "../logo";
import SearchFormComponent from "../searchForm";
import {
  Navbar,
  NavbarContent,
  LogoWrapper,
  FormWrapper,
} from "./navbar.styled";

const NavbarComponent = () => {
  return (
    <Navbar>
      <ContainerComponent>
        <NavbarContent>
          <LogoWrapper>
            <LogoComponent />
          </LogoWrapper>
          <FormWrapper>
            <SearchFormComponent />
          </FormWrapper>
        </NavbarContent>
      </ContainerComponent>
    </Navbar>
  );
};

NavbarComponent.propTypes = {};

NavbarComponent.defaultProps = {};

export default NavbarComponent;
