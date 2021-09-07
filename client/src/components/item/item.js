/* eslint-disable */
import React, { useEffect } from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import BreadcrumbComponent from "../commons/breacrumb";
import LoaderComponent from "../commons/loader";
import { ItemSection, BreadcrumbWrapper, ListWrapper } from "./item.styled";
import ContainerComponent from "../commons/container";
import ProductListComponent from "../commons/productList";
import NotFoundComponent from "../commons/notFound/notFound";
import qs from "qs";

const ItemComponent = ({
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
      setQuerySearch(querySearch);
      itemListFetch(querySearch);
    }
  }, [querySearch]);

  const handleClickItem = ({ id }) => {
    setItemSelected(id);
    history.push(`/items/${id}`);
  };

  const handleClearFilter = () => {
    setQuerySearch("");
    history.push(`/`);
  };

  const handleShortcutClicked = (category) => {
    setQuerySearch(category);
    history.push(`/items?search=${category}`);
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
                  <BreadcrumbComponent
                    breadcrumbCategories={categories}
                    handleShortcutClicked={handleShortcutClicked}
                  />
                )}
              </BreadcrumbWrapper>
              <ListWrapper>
                <React.Fragment>
                  {items.length === 0 && (
                    <NotFoundComponent handleClearFilter={handleClearFilter} />
                  )}
                </React.Fragment>
                <React.Fragment>
                  {items.length > 0 && (
                    <React.Fragment>
                      {items.length > 0 && (
                        <ProductListComponent
                          products={items}
                          handleClickItem={handleClickItem}
                        />
                      )}
                    </React.Fragment>
                  )}
                </React.Fragment>
              </ListWrapper>
            </React.Fragment>
          )}
        </React.Fragment>

        <React.Fragment>
          {status === "FAILED" && (
            <NotFoundComponent handleClearFilter={handleClearFilter} />
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
