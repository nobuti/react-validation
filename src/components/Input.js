import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Form-fields.css";

class Input extends Component {
  state = {
    showError: false
  };

  onBlurHandler = e => {
    this.setState(state => {
      return { showError: true };
    });
  };

  onChangeHandler = e => {
    const { onChange, name } = this.props;
    onChange(name, e.target.value);
  };

  render() {
    const { showError } = this.state;
    const { name, error } = this.props;
    const css = error && showError ? "Input has-error" : "Input";

    return (
      <div className="Form-field">
        <input
          type="text"
          placeholder={name}
          aria-label={name}
          className={css}
          onChange={this.onChangeHandler}
          onBlur={this.onBlurHandler}
        />
      </div>
    );
  }
}

Input.defaultProps = {
  error: false
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

export default Input;
