import React from "react";
import PropTypes from "prop-types";
import "./Form-fields.css";

const Textarea = ({ name, error = false, onChange }) => {
  const onChangeHandler = e => {
    onChange(name, e.target.value);
  };

  const css = error ? "TextArea has-error" : "TextArea";

  return (
    <div className="Form-field">
      <textarea
        placeholder={name}
        aria-label={name}
        className={css}
        onChange={onChangeHandler}
      />
    </div>
  );
};

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool
};

export default Textarea;
