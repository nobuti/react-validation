import React from "react";
import PropTypes from "prop-types";
import "./Image.css";

const inlineStyle = src => {
  return {
    backgroundImage: `url(${src})`
  };
};

const Image = ({ src, onDelete }) => {
  return (
    <button
      type="button"
      onClick={e => {
        onDelete(src);
      }}
      className="Image"
      style={inlineStyle(src)}
    >
      <svg viewBox="0 0 459 459">
        <path d="M76.5 408c0 28.05 22.95 51 51 51h204c28.05 0 51-22.95 51-51V102h-306v306zM408 25.5h-89.25L293.25 0h-127.5l-25.5 25.5H51v51h357v-51z" />
      </svg>
    </button>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Image;
