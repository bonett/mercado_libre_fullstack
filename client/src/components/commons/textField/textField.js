import React from "react";
import PropTypes from "prop-types";
import { TextFieldWrapper, TextField, Button } from "./textField.styled";
import searchIcon from "../../../static/img/ic_Search@2x.png.png.png";

const TextFieldComponent = ({
  handleInputSearch,
  inputValue,
  handleSearchButton,
}) => {
  return (
    <TextFieldWrapper>
      <TextField
        type="text"
        placeholder="Nunca dejes de buscar"
        maxLength="120"
        onChange={(e) => handleInputSearch(e)}
        value={inputValue}
      />
      <Button type="submit" onClick={() => handleSearchButton()}>
        <img src={searchIcon} alt="search item" />
      </Button>
    </TextFieldWrapper>
  );
};

TextFieldComponent.propTypes = {
  handleInputSearch: PropTypes.func.isRequired,
  handleSearchButton: PropTypes.func.isRequired,
  inputValue: PropTypes.string,
};

TextFieldComponent.defaultProps = {
  handleInputSearch: () => {},
  handleSearchButton: () => {},
};

export default TextFieldComponent;
