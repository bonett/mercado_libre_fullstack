/* eslint-disable */
import React, { useEffect } from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import BreadcrumbComponent from "../commons/breacrumb";
import LoaderComponent from "../commons/loader";
import { ItemSection, BreadcrumbWrapper, ListWrapper } from "./item.styled";
import ContainerComponent from "../commons/container";
import ProductListComponent from "../commons/productList";
import qs from "qs";

const ItemComponent = ({
  items,
  status,
  categories,
  location,
  history,
  itemListFetch,
  setItemSelected,
}) => {
  const querySearch = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  }).search;

  useEffect(() => {
    if (querySearch) {
      itemListFetch(querySearch);
    }
  }, [querySearch]);

  const handleClickItem = ({ id }) => {
    setItemSelected(id);
    history.push(`/items/${id}`);
  };

  return (
    <ItemSection>
      <ContainerComponent>
        <React.Fragment>
          {status === "LOADING" && <LoaderComponent screen={"LIST"} />}
        </React.Fragment>
        <React.Fragment>
          {status === "LOADED" && (
            <React.Fragment>
              <BreadcrumbWrapper>
                {categories.length > 0 && (
                  <BreadcrumbComponent breadcrumbCategories={categories} />
                )}
              </BreadcrumbWrapper>
              <ListWrapper>
                {items.length > 0 && (
                  <ProductListComponent
                    products={items}
                    handleClickItem={handleClickItem}
                  />
                )}
              </ListWrapper>
            </React.Fragment>
          )}
        </React.Fragment>
      </ContainerComponent>
    </ItemSection>
  );
};

ItemComponent.propTypes = {
  status: PropTypes.string,
  itemListFetch: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  items: PropTypes.array.isRequired,
  history: PropTypes.object,
  location: PropTypes.object,
  setItemSelected: PropTypes.func.isRequired,
};

ItemComponent.defaultProps = {
  itemListFetch: () => {},
  categories: [],
  items: [],
  setItemSelected: () => {},
};

export default withRouter(ItemComponent);
