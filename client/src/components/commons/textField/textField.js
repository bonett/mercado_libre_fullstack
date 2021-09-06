import React from "react";
import PropTypes from "prop-types";
import { TextFieldWrapper, TextField, Button } from "./textField.styled";
import searchIcon from "../../../static/img/ic_Search@2x.png.png.png";

const TextFieldComponent = ({ handleInputSearch, query }) => {
  return (
    <TextFieldWrapper>
      <TextField
        type="search"
        placeholder="Nunca dejes de buscar"
        maxLength="120"
        onChange={handleInputSearch}
        value={query}
      />
      <Button type="submit">
        <img src={searchIcon} alt="search item" />
      </Button>
    </TextFieldWrapper>
  );
};

TextFieldComponent.propTypes = {
  handleInputSearch: PropTypes.func.isRequired,
  query: PropTypes.string,
};

TextFieldComponent.defaultProps = {
  handleInputSearch: () => {},
};

export default TextFieldComponent;
