import React, { useEffect } from "react";
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

const ItemDetailComponent = ({
  itemSelected,
  status,
  history,
  match,
  categories,
  setQuerySearch,
  itemDetailFetch,
}) => {
  const handleShortcutClicked = (shortcut) => {
    setQuerySearch(shortcut);
    history.push(`/items?search=${shortcut}`);
  };

  useEffect(() => {
    if (match) {
      const {
        params: { id },
      } = match;
      itemDetailFetch(id);
    }
  }, [match]);

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
                  <BreadcrumbComponent
                    breadcrumbCategories={categories}
                    handleShortcutClicked={handleShortcutClicked}
                  />
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
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  setQuerySearch: PropTypes.func.isRequired,
  itemDetailFetch: PropTypes.func.isRequired,
};

ItemDetailComponent.defaultProps = {
  categories: [],
  setQuerySearch: () => {},
  itemDetailFetch: () => {},
};

export default withRouter(ItemDetailComponent);
