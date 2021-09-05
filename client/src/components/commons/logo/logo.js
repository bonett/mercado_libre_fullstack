import React from "react";
import PropTypes from "prop-types";
import { Button } from "./logo.styled";
import logoMeli from "../../../static/img/Logo_ML@2x.png.png.png";

const LogoComponent = ({ logoClicked }) => {
  return (
    <Button type="button" onClick={logoClicked}>
      <img src={logoMeli} alt="Mercado Libre" />
    </Button>
  );
};

LogoComponent.propTypes = {
  logoClicked: PropTypes.func.isRequired,
};

LogoComponent.defaultProps = {
  logoClicked: () => {},
};

export default LogoComponent;
