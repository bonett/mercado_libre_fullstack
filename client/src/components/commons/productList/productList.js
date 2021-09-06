import React from "react";
import PropTypes, { object } from "prop-types";
import ProductItemComponent from "../product";
import { ProductListContent } from "./productList.styled";

const ProductListComponent = ({ products, handleClickItem }) => {
  return (
    <ProductListContent>
      {products.map((product) => {
        return (
          <ProductItemComponent
            product={product}
            key={product.id}
            handleClickItem={handleClickItem}
          />
        );
      })}
    </ProductListContent>
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
