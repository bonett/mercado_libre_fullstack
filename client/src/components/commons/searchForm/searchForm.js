import React from "react";
import PropTypes from "prop-types";

import TextFieldComponent from "../textField";

/* import "./style.scss"; */

const SearchFormComponent = () => {
  return (
    <form
      action={`http://localhost:3000/items?query=${"searchValue"}`}
      method="GET"
      role="search"
    >
      <TextFieldComponent />
      {/* <InputSearchComponent
                handleInputSearch={handleInputSearch}
                searchValue={searchValue}
            /> */}
      dd
    </form>
  );
};

SearchFormComponent.propTypes = {};

SearchFormComponent.defaultProps = {
  /* searchValue: "", */
};

export default SearchFormComponent;
