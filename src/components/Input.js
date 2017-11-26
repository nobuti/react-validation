import React from "react";
import PropTypes from "prop-types";
import FormField from "./FormField";

import "./Form-fields.css";

const Input = props => {
  return (
    <FormField
      {...props}
      render={({ showError, onBlur, onChange }) => {
        const { error, name } = props;
        const css = error && showError ? "Input has-error" : "Input";

        return (
          <div className="Form-field">
            <input
              type="text"
              placeholder={name}
              aria-label={name}
              className={css}
              onChange={onChange}
              onBlur={onBlur}
            />
          </div>
        );
      }}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

export default Input;
