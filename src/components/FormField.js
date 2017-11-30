import { Component } from 'react';
import PropTypes from 'prop-types';

class FormField extends Component {
  state = {
    showError: false
  };

  onBlurHandler = e => {
    this.setState({ showError: true });
  };

  onChangeHandler = e => {
    const { name, onChange } = this.props;
    onChange(name, e.target.value);
  };

  render() {
    const props = {
      showError: this.state.showError,
      onBlur: this.onBlurHandler,
      onChange: this.onChangeHandler
    };
    return this.props.render(props);
  }
}

FormField.defaultProps = {
  error: false
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool
};

export default FormField;
