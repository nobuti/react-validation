import React, { Component } from 'react';
import Form from './Form';
import Input from './Input';
import Textarea from './Textarea';
import Image from './Image';
import InputFile from './InputFile';
import Submit from './Submit';
import { uuid } from '../utils';

import './Modal.css';
import './Button.css';
import { validEmail, required, lessThan, validate } from '../validations/index';

const validations = {
  To: [required, validEmail],
  CC: [validEmail],
  BCC: [validEmail],
  Subject: [required, lessThan(100)],
  Message: [required]
};

const anyError = error => {
  return Object.keys(error).length > 0;
};

const getError = (error, key) => error[key];

class Modal extends Component {
  state = {
    To: '',
    CC: '',
    BCC: '',
    Message: '',
    Subject: '',
    images: []
  };

  onChange = (field, value) => {
    this.setState(state => {
      return {
        ...state,
        [field]: value
      };
    });
  };

  onFileChange = e => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState(state => {
        const image = { url: reader.result, uuid: uuid() };
        return { ...state, images: [...state.images, image] };
      });
    };

    reader.readAsDataURL(file);
  };

  deleteImage = uuid => {
    this.setState(state => {
      return {
        ...state,
        images: state.images.filter(item => item.uuid !== uuid)
      };
    });
  };

  renderImages = () => {
    const { images } = this.state;
    return images.map(image => {
      return (
        <li key={image.uuid} className="Modal-image">
          <Image
            src={image.url}
            uuid={image.uuid}
            onDelete={this.deleteImage}
          />
        </li>
      );
    });
  };

  render() {
    const errors = validate(this.state, validations);

    return (
      <div className="Modal">
        <div className="Modal-header">
          <h1>Send E-mail</h1>
        </div>

        <div className="Modal-body">
          <Form>
            <Input
              name="To"
              error={getError(errors, 'To')}
              onChange={this.onChange}
            />
            <Input
              name="CC"
              error={getError(errors, 'CC')}
              onChange={this.onChange}
            />
            <Input
              name="BCC"
              error={getError(errors, 'BCC')}
              onChange={this.onChange}
            />
            <Input
              name="Subject"
              error={getError(errors, 'Subject')}
              onChange={this.onChange}
            />
            <Textarea
              name="Message"
              error={getError(errors, 'Message')}
              onChange={this.onChange}
            />

            <ul className="Modal-images">{this.renderImages()}</ul>

            <ul className="Modal-controls">
              <li>
                <InputFile onFileChange={this.onFileChange} />
              </li>
              <li>
                <Submit disable={anyError(errors)}>
                  <span className="Button-label">Send</span>
                </Submit>
              </li>
            </ul>
          </Form>
        </div>
      </div>
    );
  }
}

export default Modal;
