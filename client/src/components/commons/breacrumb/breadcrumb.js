import React from "react";
import PropTypes, { string } from "prop-types";

import { BreadcrumbContent } from "./breadcrumb.styled";

const BreadcrumbComponent = ({ breadcrumbCategories }) => {
  return (
    <BreadcrumbContent className="container">
      <ul className="breadcrumb">
        {breadcrumbCategories.map((category) => {
          return (
            <li className="breadcrumb_item" key={category}>
              {category}
            </li>
          );
        })}
      </ul>
    </BreadcrumbContent>
  );
};

BreadcrumbComponent.propTypes = {
  breadcrumbCategories: PropTypes.arrayOf(string),
};

BreadcrumbComponent.defaultProps = {
  breadcrumbCategories: [],
};

export default BreadcrumbComponent;
