import React from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import {
  LoaderContent,
  LoaderWrapper,
  Media,
  Caption,
  Location,
} from "./loader.styled";

const SkeletonComponent = ({ screen }) => {
  const loaders = screen === "LIST" ? [1, 2, 3, 4] : [1];
  return (
    <LoaderContent>
      {loaders.map((item) => {
        return (
          <LoaderWrapper key={item} render={screen}>
            <Media>
              <Skeleton height={180} width={220} />
            </Media>
            <Caption>
              <div>
                <Skeleton height={24} width={220} />
              </div>
              <div>
                <Skeleton height={18} width={220} />
              </div>
              <div>
                <Skeleton height={18} width={220} />
              </div>
            </Caption>
            <Location>
              <Skeleton width={120} />
            </Location>
          </LoaderWrapper>
        );
      })}
    </LoaderContent>
  );
};

SkeletonComponent.propTypes = {
  screen: PropTypes.string.isRequired,
};

export default SkeletonComponent;
