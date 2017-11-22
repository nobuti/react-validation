import React, {Component} from 'react';
import './Form.css';

class Form extends Component {
  render () {
    return (
      <form className='Form' onSubmit={() => {console.log('yay!')}}>
        {this.props.children}
      </form>
    );
  }
}

export default Form;