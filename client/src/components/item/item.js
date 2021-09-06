import React, { useEffect } from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import BreadcrumbComponent from "../commons/breacrumb";
import LoaderComponent from "../commons/loader";
import { ItemSection, BreadcrumbWrapper, ListWrapper } from "./item.styled";
import ContainerComponent from "../commons/container";
import ProductListComponent from "../commons/productList";

const ItemComponent = ({
  query,
  items,
  status,
  categories,
  history,
  itemListFetch,
}) => {
  useEffect(() => {
    if (query) {
      itemListFetch(query);
    }
  }, [query]);

  const handleClickItem = ({ id }) => {
    history.push(`/items/${id}`);
  };

  console.log(status, items);
  return (
    <ItemSection>
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
              <ListWrapper>
                {items && (
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
  query: PropTypes.string,
  status: PropTypes.string,
  itemListFetch: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired,
  history: PropTypes.object,
};

ItemComponent.defaultProps = {
  itemListFetch: () => {},
  categories: [],
  items: [],
};

export default withRouter(ItemComponent);
