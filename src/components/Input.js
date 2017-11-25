import React from "react";
import PropTypes from "prop-types";
import "./Form-fields.css";

const Input = ({ name, error = false, onChange }) => {
  const onChangeHandler = e => {
    onChange(name, e.target.value);
  };

  const css = error ? "Input has-error" : "Input";

  return (
    <div className="Form-field">
      <input
        type="text"
        placeholder={name}
        aria-label={name}
        className={css}
        onChange={onChangeHandler}
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

export default Input;
