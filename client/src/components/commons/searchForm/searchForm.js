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
      action={`http://localhost:3000/items?search=${query}`}
      method="GET"
      role="search"
      onSubmit={handleSearchButton}
    >
      <TextFieldComponent query={query} handleInputSearch={handleInputSearch} />
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
