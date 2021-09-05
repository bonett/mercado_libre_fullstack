import React from "react";
import PropTypes from "prop-types";
import { TextFieldWrapper, TextField, Button } from "./textField.styled";
import searchIcon from "../../../static/img/ic_Search@2x.png.png.png";

const TextFieldComponent = () => {
  return (
    <TextFieldWrapper>
      <TextField
        type="search"
        placeholder="Nunca dejes de buscar"
        maxLength="120"
        autoComplete="off"
        /* onChange={handleInputSearch}
                value={searchValue} */
      />
      <Button type="submit" className="form-control_btn">
        <img src={searchIcon} alt="search item" />
      </Button>
    </TextFieldWrapper>
  );
};

TextFieldComponent.propTypes = {
  /*  handleInputSearch: PropTypes.func.isRequired,
    searchValue: PropTypes.string, */
};

TextFieldComponent.defaultProps = {
  /* searchValue: '', */
};

export default TextFieldComponent;
