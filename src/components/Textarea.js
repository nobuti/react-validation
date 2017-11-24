import React from "react";
import PropTypes from "prop-types";
import "./Form-fields.css";

const Textarea = ({ name, onChange }) => {
  const onChangeHandler = e => {
    onChange(name, e.target.value);
  };

  return (
    <div className="Form-field">
      <textarea
        placeholder={name}
        aria-label={name}
        className="TextArea"
        onChange={onChangeHandler}
      />
    </div>
  );
};

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Textarea;
