import React from "react";
import PropTypes from "prop-types";
import { Container } from "./container.styled";

const ContainerComponent = (props) => {
  return <Container className="container">{props.children}</Container>;
};

ContainerComponent.propTypes = {
  children: PropTypes.any,
};

export default ContainerComponent;
