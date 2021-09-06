import React from "react";
import PropTypes from "prop-types";
import shippingIcon from "../../../static/img/ic_shipping@2x.png.png.png";
import transformAmount from "../../../utils/transformAmount";
import {
  Article,
  Thumbnail,
  Caption,
  Price,
  Location,
  Address,
  Icon,
  Name,
  Condition,
} from "./product.styled";

const ProductItemComponent = ({ product, handleClickItem }) => {
  return (
    <Article onClick={() => handleClickItem(product)}>
      <Thumbnail>
        <img src={product.thumbnail} alt={product.title} />
      </Thumbnail>
      <Caption>
        <Price>
          <React.Fragment>
            {transformAmount(product.price.amount, product.price.currency)}
            <React.Fragment>
              {product.price.decimals !== null ? (
                <span className="decimals">{product.price.decimals}</span>
              ) : (
                <span className="decimals">00</span>
              )}
            </React.Fragment>
          </React.Fragment>
          <React.Fragment>
            {product.free_shipping && (
              <Icon>
                <img src={shippingIcon} alt={product.title} />
              </Icon>
            )}
          </React.Fragment>
        </Price>
        <Name>{product.title}</Name>
        <Condition>{product.condition}!</Condition>
      </Caption>
      <Location>
        <Address>{product.address}</Address>
      </Location>
    </Article>
  );
};

ProductItemComponent.propTypes = {
  product: PropTypes.object.isRequired,
  handleClickItem: PropTypes.func.isRequired,
};

export default ProductItemComponent;
