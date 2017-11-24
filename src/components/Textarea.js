import React from "react";
import "./Form-fields.css";

const Textarea = ({ name }) => {
  return (
    <div className="Form-field">
      <textarea placeholder={name} aria-label={name} className="TextArea" />
    </div>
  );
};

export default Textarea;
