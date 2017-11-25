import React, { Component } from "react";
import Form from "./Form";
import Input from "./Input";
import Textarea from "./Textarea";
import Image from "./Image";
import InputFile from "./InputFile";
import { uuid } from "../utils";

import "./Modal.css";
import "./Button.css";

class Modal extends Component {
  state = {
    To: "",
    CC: "",
    BCC: "",
    Message: "",
    errors: {},
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
    return (
      <div className="Modal">
        <div className="Modal-header">
          <h1>Send E-mail</h1>
        </div>

        <div className="Modal-body">
          <Form>
            <Input name="To" onChange={this.onChange} />
            <Input name="CC" onChange={this.onChange} />
            <Input name="BCC" onChange={this.onChange} />
            <Input name="Subject" onChange={this.onChange} />
            <Textarea name="Message" onChange={this.onChange} />

            <ul className="Modal-images">{this.renderImages()}</ul>

            <ul className="Modal-controls">
              <li>
                <InputFile onFileChange={this.onFileChange} />
              </li>
              <li>
                <button type="submit" className="Button" disabled>
                  <svg viewBox="0 0 512 512">
                    <path d="M511.19 251.924c-.534-1.323-1.324-2.496-2.326-3.477l-191.98-191.98c-4.16-4.16-10.922-4.16-15.082 0s-4.16 10.924 0 15.084l173.78 173.782H10.668C4.78 245.332 0 250.112 0 256s4.78 10.666 10.667 10.666h464.917l-173.78 173.78c-4.16 4.16-4.16 10.924 0 15.084 2.09 2.09 4.82 3.115 7.55 3.115 2.732 0 5.462-1.045 7.553-3.115l191.98-191.98c.98-.98 1.77-2.175 2.324-3.476 1.046-2.603 1.046-5.547-.02-8.15z" />
                  </svg>
                  <span className="Button-label">Send</span>
                </button>
              </li>
            </ul>
          </Form>
        </div>
      </div>
    );
  }
}

export default Modal;
