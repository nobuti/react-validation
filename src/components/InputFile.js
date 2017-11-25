import React from "react";
import PropTypes from "prop-types";

import "./InputFile.css";
import "./Button.css";

const InputFile = ({ onFileChange }) => {
  return (
    <div className="InputFile">
      <button type="button" className="Button">
        <svg viewBox="0 0 512 512">
          <path d="M359.784 103.784v262.92c0 57.225-46.557 103.783-103.784 103.783S152.216 423.93 152.216 366.703v-262.92c0-34.335 27.934-62.27 62.27-62.27s62.27 27.935 62.27 62.27v262.92c0 11.445-9.312 20.757-20.757 20.757s-20.758-9.31-20.758-20.757v-262.92H193.73v262.92c0 34.336 27.934 62.27 62.27 62.27s62.27-27.934 62.27-62.27v-262.92C318.27 46.558 271.713 0 214.487 0S110.703 46.557 110.703 103.784v262.92C110.703 446.82 175.883 512 256 512s145.297-65.18 145.297-145.297v-262.92h-41.513z" />
        </svg>
      </button>
      <input
        type="file"
        name="image"
        accept="image/png, image/jpeg"
        onChange={onFileChange}
      />
    </div>
  );
};

InputFile.propTypes = {
  onFileChange: PropTypes.func.isRequired
};

export default InputFile;
