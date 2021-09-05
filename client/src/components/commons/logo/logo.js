import React from "react";
import PropTypes from "prop-types";
import { Button } from "./logo.styled";
import logoMeli from "../../../static/img/Logo_ML@2x.png.png.png";

const LogoComponent = () => {
  return (
    <Button type="button">
      <img src={logoMeli} alt="Mercado Libre" />
    </Button>
  );
};

LogoComponent.propTypes = {};

export default LogoComponent;
