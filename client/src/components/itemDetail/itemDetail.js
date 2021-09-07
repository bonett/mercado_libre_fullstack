/* eslint-disable */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import BreadcrumbComponent from "../commons/breacrumb";
import ContainerComponent from "../commons/container";
import LoaderComponent from "../commons/loader";
import ProductDetailComponent from "../commons/productDetail";
import NotFoundComponent from "../commons/notFound/notFound";
import {
  ItemDetailSection,
  BreadcrumbWrapper,
  NotFoundWithoutCat,
  ItemDetailDescription,
} from "./itemDetail.styled";

const ItemDetailComponent = ({
  itemSelected,
  status,
  match,
  categories,
  history,
  itemDetailFetch,
  setQuerySearch,
}) => {
  useEffect(() => {
    if (match) {
      const {
        params: { id },
      } = match;
      itemDetailFetch(id);
    }
  }, [match]);

  const handleClearFilter = () => {
    setQuerySearch("");
    history.push(`/`);
  };

  return (
    <ItemDetailSection>
      <ContainerComponent>
        <React.Fragment>
          {status === "LOADING" && <LoaderComponent screen={"DETAIL"} />}
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
                <React.Fragment>
                  {!itemSelected && (
                    <NotFoundComponent handleClearFilter={handleClearFilter} />
                  )}
                </React.Fragment>
                <React.Fragment>
                  {itemSelected && (
                    <ProductDetailComponent item={itemSelected} />
                  )}
                </React.Fragment>
              </ItemDetailDescription>
            </React.Fragment>
          )}
        </React.Fragment>

        <React.Fragment>
          {status === "FAILED" && (
            <NotFoundWithoutCat>
              <NotFoundComponent handleClearFilter={handleClearFilter} />
            </NotFoundWithoutCat>
          )}
        </React.Fragment>
      </ContainerComponent>
    </ItemDetailSection>
  );
};

ItemDetailComponent.propTypes = {
  itemSelected: PropTypes.object.isRequired,
  status: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object,
  categories: PropTypes.array.isRequired,
  itemDetailFetch: PropTypes.func.isRequired,
  setQuerySearch: PropTypes.func.isRequired,
};

ItemDetailComponent.defaultProps = {
  categories: [],
  itemDetailFetch: () => {},
  setQuerySearch: () => {},
};

export default withRouter(ItemDetailComponent);
