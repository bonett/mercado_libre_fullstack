import React from "react";
import PropTypes from "prop-types";
const customLogo = require("../../../static/img/Logo_ML@2x.png.png.png");

const LogoComponent = () => {
  return (
    <button type="button" alt="Mercado Libre">
      <img src={customLogo} alt="Mercado Libre" />
    </button>
  );
};

LogoComponent.propTypes = {};

export default LogoComponent;
