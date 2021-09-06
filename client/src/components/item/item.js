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
  setItemSelected,
  itemDetailFetch,
}) => {
  useEffect(() => {
    if (query) {
      itemListFetch(query);
    }
  }, [query]);

  const handleClickItem = ({ id }) => {
    setItemSelected(id);
    itemDetailFetch(id);
    history.push(`/items/${id}`);
  };

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
  query: PropTypes.string,
  status: PropTypes.string,
  itemListFetch: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  items: PropTypes.array.isRequired,
  history: PropTypes.object,
  setItemSelected: PropTypes.func.isRequired,
  itemDetailFetch: PropTypes.func.isRequired,
};

ItemComponent.defaultProps = {
  itemListFetch: () => {},
  categories: [],
  items: [],
  setItemSelected: () => {},
  itemDetailFetch: () => {},
};

export default withRouter(ItemComponent);
