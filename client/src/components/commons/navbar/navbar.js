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

const NavbarComponent = ({
  redirectToHome,
  query,
  handleInputSearch,
  handleSearchButton,
}) => {
  return (
    <Navbar>
      <ContainerComponent>
        <NavbarContent>
          <LogoWrapper>
            <LogoComponent logoClicked={redirectToHome} />
          </LogoWrapper>
          <FormWrapper>
            <SearchFormComponent
              query={query}
              handleInputSearch={handleInputSearch}
              handleSearchButton={handleSearchButton}
            />
          </FormWrapper>
        </NavbarContent>
      </ContainerComponent>
    </Navbar>
  );
};

NavbarComponent.propTypes = {
  redirectToHome: PropTypes.func.isRequired,
  handleInputSearch: PropTypes.func.isRequired,
  handleSearchButton: PropTypes.func.isRequired,
  query: PropTypes.string,
};

NavbarComponent.defaultProps = {
  redirectToHome: () => {},
  handleInputSearch: () => {},
  handleSearchButton: () => {},
};

export default NavbarComponent;
