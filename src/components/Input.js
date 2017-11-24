import React from "react";
import "./Form-fields.css";

const Input = ({ name }) => {
  return (
    <div className="Form-field">
      <input
        type="text"
        placeholder={name}
        aria-label={name}
        className="Input"
      />
    </div>
  );
};

export default Input;
