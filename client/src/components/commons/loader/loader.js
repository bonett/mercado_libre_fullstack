import React from "react";
import Skeleton from "react-loading-skeleton";
import { LoaderContent } from "./loader.styled";

const SkeletonComponent = () => {
  const loaders = [1, 2, 3, 4];
  return (
    <LoaderContent>
      {loaders.map((item) => {
        return (
          <div className="content" key={item}>
            <div className="media">
              <Skeleton height={180} />
            </div>
            <div className="caption">
              <div>
                <Skeleton height={24} width={220} />
              </div>
              <div>
                <Skeleton height={18} width={220} />
              </div>
              <div>
                <Skeleton height={18} width={220} />
              </div>
            </div>
            <div className="location">
              <Skeleton width={120} />
            </div>
          </div>
        );
      })}
    </LoaderContent>
  );
};

SkeletonComponent.propTypes = {};

export default SkeletonComponent;
