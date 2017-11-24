import React from "react";
import PropTypes from "prop-types";
import "./Form-fields.css";

const Input = ({ name, onChange }) => {
  const onChangeHandler = e => {
    onChange(name, e.target.value);
  };

  return (
    <div className="Form-field">
      <input
        type="text"
        placeholder={name}
        aria-label={name}
        className="Input"
        onChange={onChangeHandler}
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Input;
