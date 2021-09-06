import React from "react";
import Skeleton from "react-loading-skeleton";
import {
  LoaderContent,
  LoaderWrapper,
  Media,
  Caption,
  Location,
} from "./loader.styled";

const SkeletonComponent = () => {
  const loaders = [1, 2, 3, 4];
  return (
    <LoaderContent>
      {loaders.map((item) => {
        return (
          <LoaderWrapper key={item}>
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

SkeletonComponent.propTypes = {};

export default SkeletonComponent;
