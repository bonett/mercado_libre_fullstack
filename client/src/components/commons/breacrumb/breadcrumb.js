import React from "react";
import PropTypes, { string } from "prop-types";

import {
  BreadcrumbContent,
  BreadcrumbList,
  BreadcrumbItem,
} from "./breadcrumb.styled";

const BreadcrumbComponent = ({
  breadcrumbCategories,
  handleShortcutClicked,
}) => {
  return (
    <BreadcrumbContent>
      <BreadcrumbList>
        {breadcrumbCategories.map((category, index) => {
          return (
            <BreadcrumbItem
              key={index}
              onClick={() => handleShortcutClicked(category)}
            >
              {category}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </BreadcrumbContent>
  );
};

BreadcrumbComponent.propTypes = {
  breadcrumbCategories: PropTypes.arrayOf(string),
  handleShortcutClicked: PropTypes.func.isRequired,
};

BreadcrumbComponent.defaultProps = {
  breadcrumbCategories: [],
  handleShortcutClicked: () => {},
};

export default BreadcrumbComponent;
