import React, { Component } from 'react';
import Form from './Form';
import Input from './Input';
import Textarea from './Textarea';
import './Modal.css';

class Modal extends Component {
  render() {
    return <div className="Modal">
        <div className="Modal-header">
          <h1>Send E-mail</h1>
        </div>

        <div className="Modal-body">
          <Form>
            <Input name="To" />
            <Input name="CC" />
            <Input name="BCC" />
            <Input name="Subject" />
            <Textarea name="Message" />
          </Form>
        </div>
      </div>;
  }
}

export default Modal;
