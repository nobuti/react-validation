import React, { Component } from "react";
import Form from "./Form";
import Input from "./Input";
import Textarea from "./Textarea";
import Image from "./Image";

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

  deleteImage = image => {
    this.setState(state => {
      return {
        ...state,
        images: state.images.filter(item => item !== image)
      };
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

            <ul className="Modal-images">
              <li className="Modal-image">
                <Image
                  src="https://www.dropbox.com/s/fjhsvx2dh65sznl/tw.jpg?raw=1"
                  onDelete={this.deleteImage}
                />
              </li>
              <li className="Modal-image">
                <Image
                  src="https://www.dropbox.com/s/kqlbay75n8xvyhk/supermanhulk-8-bit-jesus-castaneda.jpg?raw=1"
                  onDelete={this.deleteImage}
                />
              </li>
            </ul>

            <ul className="Modal-controls">
              <li>
                <button type="button" className="Button">
                  <svg viewBox="0 0 512 512">
                    <path d="M359.784 103.784v262.92c0 57.225-46.557 103.783-103.784 103.783S152.216 423.93 152.216 366.703v-262.92c0-34.335 27.934-62.27 62.27-62.27s62.27 27.935 62.27 62.27v262.92c0 11.445-9.312 20.757-20.757 20.757s-20.758-9.31-20.758-20.757v-262.92H193.73v262.92c0 34.336 27.934 62.27 62.27 62.27s62.27-27.934 62.27-62.27v-262.92C318.27 46.558 271.713 0 214.487 0S110.703 46.557 110.703 103.784v262.92C110.703 446.82 175.883 512 256 512s145.297-65.18 145.297-145.297v-262.92h-41.513z" />
                  </svg>
                </button>
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
