import React, { useEffect } from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import BreadcrumbComponent from "../commons/breacrumb";
import LoaderComponent from "../commons/loader";
import { ItemSection, BreadcrumbWrapper, ListWrapper } from "./item.styled";
import ContainerComponent from "../commons/container";

const ItemComponent = ({ query, fetchStatus, categories, itemListFetch }) => {
  useEffect(() => {
    if (query) {
      itemListFetch(query);
    }
  }, [query]);

  return (
    <ItemSection>
      shjgghjghjghjghjghjghjjghghjghj
      <ContainerComponent>
        <React.Fragment>
          {fetchStatus === "LOADING" && <LoaderComponent />}
        </React.Fragment>
        <React.Fragment>
          {fetchStatus === "COMPLETED" && (
            <React.Fragment>
              <BreadcrumbWrapper>
                {categories.length > 0 && (
                  <BreadcrumbComponent breadcrumbCategories={categories} />
                )}
              </BreadcrumbWrapper>
              <ListWrapper>
                {/* {items.length > 0 && (
                  <ProductListComponent
                    products={items}
                    handleClickItem={handleClickItem}
                  />
                )} */}
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
  fetchStatus: PropTypes.string.isRequired,
  itemListFetch: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  /* queryParam: PropTypes.string,
  history: PropTypes.object,
  setQueryParam: PropTypes.func.isRequired, */
};

ItemComponent.defaultProps = {
  itemListFetch: () => {},
  /* history: {},
  setQueryParam: () => {}, */
};

export default withRouter(ItemComponent);
