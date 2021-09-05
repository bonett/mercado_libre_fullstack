import React from "react";
import PropTypes, { string } from "prop-types";

/* import "./style.scss"; */

const BreadcrumbComponent = ({ categories }) => {
  return (
    <div className="container">
      <ul className="breadcrumb">
        {categories.map((category) => {
          return (
            <li className="breadcrumb_item" key={category}>
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

BreadcrumbComponent.propTypes = {
  categories: PropTypes.arrayOf(string),
};

BreadcrumbComponent.defaultProps = {
  categories: [],
};

export default BreadcrumbComponent;
