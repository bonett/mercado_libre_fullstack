import React from "react";
import PropTypes from "prop-types";
import shippingIcon from "../../../static/img/ic_shipping@2x.png.png.png";
import transformAmount from "../../../utils/transformAmount";

const ProductItemComponent = ({ product, handleClickItem }) => {
  return (
    <article className="item" onClick={() => handleClickItem(product)}>
      <div className="item__thumbnail">
        <img
          className="item__thumbnail_image"
          src={product.picture}
          alt={product.title}
        />
      </div>
      <div className="item__caption">
        <h3 className="item__caption_price">
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
              <span className="icon">
                <img src={shippingIcon} alt="shiping_car" className="icon-xs" />
              </span>
            )}
          </React.Fragment>
        </h3>
        <h2 className="item__caption_title">{product.title}</h2>
        <h2 className="item__caption_reference">{product.condition}!</h2>
      </div>
      <div className="item__location">
        <h6 className="item__location_origin">{product.address}</h6>
      </div>
    </article>
  );
};

ProductItemComponent.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    condition: PropTypes.string.isRequired,
    free_shipping: PropTypes.bool.isRequired,
    price: PropTypes.object.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
  handleClickItem: PropTypes.func.isRequired,
};

export default ProductItemComponent;
