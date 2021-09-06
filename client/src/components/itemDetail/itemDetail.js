import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import BreadcrumbComponent from "../commons/breacrumb";
import ContainerComponent from "../commons/container";
import LoaderComponent from "../commons/loader";
import {
  ItemDetailSection,
  BreadcrumbWrapper,
  ItemDetailDescription,
} from "./itemDetail.styled";
import ProductDetailComponent from "../commons/productDetail";

const ItemDetailComponent = ({ itemSelected, status, categories }) => {
  return (
    <ItemDetailSection>
      <ContainerComponent>
        <React.Fragment>
          {status === "LOADING" && <LoaderComponent />}
        </React.Fragment>

        <React.Fragment>
          {status === "LOADED" && (
            <React.Fragment>
              <BreadcrumbWrapper>
                {categories && (
                  <BreadcrumbComponent breadcrumbCategories={categories} />
                )}
              </BreadcrumbWrapper>
              <ItemDetailDescription>
                {itemSelected && <ProductDetailComponent item={itemSelected} />}
              </ItemDetailDescription>
            </React.Fragment>
          )}
        </React.Fragment>
      </ContainerComponent>
    </ItemDetailSection>
  );
};

ItemDetailComponent.propTypes = {
  itemSelected: PropTypes.object.isRequired,
  status: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
};

ItemDetailComponent.defaultProps = {
  categories: [],
};

export default withRouter(ItemDetailComponent);
