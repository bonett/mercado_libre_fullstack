import React from "react";
import Skeleton from "react-loading-skeleton";

import "./style.scss";

const SkeletonComponent = () => {
  const loaders = [1, 2, 3, 4];
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

SkeletonComponent.propTypes = {};

export default SkeletonComponent;
