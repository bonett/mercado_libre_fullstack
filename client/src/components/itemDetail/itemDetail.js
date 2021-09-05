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
/* import ProductDetailComponent from "../../components/Product/Detail"; */

const ItemDetailComponent = ({
  history,
  itemDetail,
  categories,
  fetchStatusDetail,
}) => {
  useEffect(() => {
    if (itemDetail === null && categories === []) {
      history.push("/");
    }
  }, []);

  return (
    <ItemDetailSection>
      <ContainerComponent>
        <React.Fragment>
          {fetchStatusDetail === "LOADING" && <LoaderComponent />}
        </React.Fragment>

        <React.Fragment>
          {fetchStatusDetail === "COMPLETED" && (
            <React.Fragment>
              <BreadcrumbWrapper>
                {categories.length > 0 && (
                  <BreadcrumbComponent breadcrumbCategories={categories} />
                )}
              </BreadcrumbWrapper>
              <ItemDetailDescription>
                {/* {itemDetail && <ProductDetailComponent item={itemDetail} />} */}
                asdas
              </ItemDetailDescription>
            </React.Fragment>
          )}
        </React.Fragment>
      </ContainerComponent>
    </ItemDetailSection>
  );
};

ItemDetailComponent.propTypes = {
  categories: PropTypes.any,
  itemDetail: PropTypes.any,
};

ItemDetailComponent.defaultProps = {
  categories: [],
  itemDetail: "",
};

export default withRouter(ItemDetailComponent);
