import React from "react";
import PropTypes from "prop-types";
import ShowMoreText from "react-show-more";
import transformAmount from "../../../utils/transformAmount";
import {
  Article,
  MediaWrapper,
  Cover,
  Description,
  Heading,
  Detail,
  Shell,
  Name,
  DetailInfoWrapper,
  Price,
  Button,
} from "./productDetail.styled";

const ProductDetailComponent = ({ item }) => {
  return (
    <Article>
      <MediaWrapper>
        <Cover
          style={{
            backgroundImage: `url(${item.picture})`,
          }}
        ></Cover>
        <Description>
          <Heading>Descripción del producto</Heading>
          <ShowMoreText
            lines={10}
            more="Leer más"
            className="view_more"
            less="Leer menos"
            expanded={true}
            truncatedEndingComponent={" ... "}
          >
            <Detail>{item.description}</Detail>
          </ShowMoreText>
        </Description>
      </MediaWrapper>
      <DetailInfoWrapper>
        <Shell>
          {item.condition} - {item.sold_quantity} Vendidos
        </Shell>
        <Name>{item.title}</Name>
        <Price>
          {transformAmount(item.price.amount, item.price.currency)}
          <React.Fragment>
            {item.price.decimals !== null ? (
              <span className="decimals">{item.price.decimals}</span>
            ) : (
              <span className="decimals">00</span>
            )}
          </React.Fragment>
        </Price>
        <Button type="button">Comprar</Button>
      </DetailInfoWrapper>
    </Article>
  );
};

ProductDetailComponent.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ProductDetailComponent;
