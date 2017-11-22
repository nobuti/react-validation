import React from 'react';
import './Input.css';

const Input = (props) => {
  return <div className="Input-field">
      <input 
        type="text" 
        placeholder={props.name} 
        aria-label={props.name} 
        className="Input" 
      />
    </div>;
}

export default Input;