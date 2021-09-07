import React from "react";
import PropTypes, { string } from "prop-types";

import {
  BreadcrumbContent,
  BreadcrumbList,
  BreadcrumbItem,
} from "./breadcrumb.styled";

const BreadcrumbComponent = ({ breadcrumbCategories }) => {
  return (
    <BreadcrumbContent>
      <BreadcrumbList>
        {breadcrumbCategories.map((category, index) => {
          return <BreadcrumbItem key={index}>{category}</BreadcrumbItem>;
        })}
      </BreadcrumbList>
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
