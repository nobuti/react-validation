import React from 'react';
import PropTypes from 'prop-types';
import FormField from './FormField';

import './Form-fields.css';

const Textarea = props => {
  return (
    <FormField
      {...props}
      render={({ showError, onBlur, onChange }) => {
        const { error, name } = props;
        const css = error && showError ? 'TextArea has-error' : 'TextArea';

        return (
          <div className="Form-field">
            <textarea
              placeholder={name}
              aria-label={name}
              className={css}
              onChange={onChange}
              onBlur={onBlur}
            />
          </div>
        );
      }}
    />
  );
};

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool
};

export default Textarea;
