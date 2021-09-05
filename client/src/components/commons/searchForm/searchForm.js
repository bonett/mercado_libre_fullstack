import React from "react";
import PropTypes from "prop-types";
import TextFieldComponent from "../textField";
import { SearchForm } from "./searchForm.styled";

const SearchFormComponent = ({
  query,
  handleInputSearch,
  handleSearchButton,
}) => {
  return (
    <SearchForm
      action={`http://localhost:3000/items?query=${query}`}
      method="GET"
      role="search"
    >
      <TextFieldComponent
        inputValue={query}
        handleInputSearch={handleInputSearch}
        handleSearchButton={handleSearchButton}
      />
    </SearchForm>
  );
};

SearchFormComponent.ropTypes = {
  query: PropTypes.string,
  handleInputSearch: PropTypes.func.isRequired,
  handleSearchButton: PropTypes.func.isRequired,
};

SearchFormComponent.defaultProps = {
  handleInputSearch: () => {},
  handleSearchButton: () => {},
};

export default SearchFormComponent;
