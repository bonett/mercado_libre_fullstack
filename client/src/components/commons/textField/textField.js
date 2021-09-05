import React from "react";
import PropTypes from "prop-types";

/* import './style.scss'; */

const TextFieldComponent = ({ handleInputSearch, searchValue }) => {
  /* const search = require('../../../../assets/img/ic_Search@2x.png.png.png'); */
  return (
    <div className="form-control">
      <input
        type="search"
        className="form-control_input"
        placeholder="Nunca dejes de buscar"
        maxLength="120"
        autoComplete="off"
        /* onChange={handleInputSearch}
                value={searchValue} */
      />
      <button type="submit" className="form-control_btn">
        <img className="icon" src={"search"} alt="search" />
      </button>
    </div>
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
