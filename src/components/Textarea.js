import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Form-fields.css";

class Textarea extends Component {
  state = {
    showError: false
  };

  onBlurHandler = e => {
    this.setState({ showError: true });
  };

  onChangeHandler = e => {
    const { onChange, name } = this.props;
    onChange(name, e.target.value);
  };

  render() {
    const { error, name } = this.props;
    const { showError } = this.state;
    const css = error && showError ? "TextArea has-error" : "TextArea";

    return (
      <div className="Form-field">
        <textarea
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

Textarea.defaultProps = {
  error: false
};

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool
};

export default Textarea;
