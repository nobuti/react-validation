import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log('yay!');
        }}
      >
        {this.props.children}
      </form>
    );
  }
}

export default Form;
