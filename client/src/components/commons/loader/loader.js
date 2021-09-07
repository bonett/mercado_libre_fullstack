import React from "react";
import PropTypes from "prop-types";
import {
  LoaderContent,
  LoaderWrapper,
  BoxWrapper,
  SkeletonLoader,
} from "./loader.styled";

const SkeletonComponent = ({ screen }) => {
  const loaders = screen === "LIST" ? [1, 2, 3, 4] : [1];
  return (
    <LoaderContent>
      <React.Fragment>
        {loaders.map((item) => {
          return (
            <LoaderWrapper key={item} render={screen}>
              <BoxWrapper render={screen}>
                <SkeletonLoader />
              </BoxWrapper>
              <BoxWrapper render={screen}>
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
              </BoxWrapper>
              <BoxWrapper render={screen}>
                <SkeletonLoader />
              </BoxWrapper>
            </LoaderWrapper>
          );
        })}
      </React.Fragment>
    </LoaderContent>
  );
};

SkeletonComponent.propTypes = {
  screen: PropTypes.string.isRequired,
};

export default SkeletonComponent;
