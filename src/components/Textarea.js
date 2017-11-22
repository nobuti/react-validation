import React from "react";
import "./Input.css";

const Textarea = props => {
  return (
    <div className="Input-field">
      <textarea
        placeholder={props.name}
        aria-label={props.name}
        className="Input Input-textArea"
      />
    </div>
  );
};

export default Textarea;
