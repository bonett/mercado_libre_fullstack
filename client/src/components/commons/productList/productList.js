import React from "react";
import PropTypes, { object } from "prop-types";
import ProductItemComponent from "../product";

const ProductListComponent = ({ products, handleClickItem }) => {
  return (
    <React.Fragment>
      {products.map((product) => {
        return (
          <ProductItemComponent
            product={product}
            key={product.id}
            handleClickItem={handleClickItem}
          />
        );
      })}
    </React.Fragment>
  );
};

ProductListComponent.propTypes = {
  products: PropTypes.arrayOf(object),
  handleClickItem: PropTypes.func.isRequired,
};

ProductListComponent.defaultProps = {
  products: [],
};

export default ProductListComponent;
