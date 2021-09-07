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
  query,
  items,
  status,
  categories,
  location,
  history,
  itemListFetch,
  setItemSelected,
  setQuerySearch,
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

  const handleShortcutClicked = (shortcut) => {
    setQuerySearch(shortcut);
    setTimeout(() => {
      history.push(`/items?search=${shortcut}`);
    }, 300);
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
                  <BreadcrumbComponent
                    breadcrumbCategories={categories}
                    handleShortcutClicked={handleShortcutClicked}
                  />
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
  location: PropTypes.object,
  setItemSelected: PropTypes.func.isRequired,
  setQuerySearch: PropTypes.func.isRequired,
};

ItemComponent.defaultProps = {
  itemListFetch: () => {},
  categories: [],
  items: [],
  setItemSelected: () => {},
  setQuerySearch: () => {},
};

export default withRouter(ItemComponent);
