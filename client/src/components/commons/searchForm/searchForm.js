import React from "react";
import PropTypes from "prop-types";
import TextFieldComponent from "../textField";
import { SearchForm } from "./searchForm.styled";

const SearchFormComponent = () => {
  return (
    <SearchForm
      action={`http://localhost:3000/items?query=${"searchValue"}`}
      method="GET"
      role="search"
    >
      <TextFieldComponent />
      {/* <InputSearchComponent
                handleInputSearch={handleInputSearch}
                searchValue={searchValue}
            /> */}
    </SearchForm>
  );
};

SearchFormComponent.propTypes = {};

SearchFormComponent.defaultProps = {
  /* searchValue: "", */
};

export default SearchFormComponent;
