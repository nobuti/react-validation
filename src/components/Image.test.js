import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import sinon from "sinon";
import Image from "./Image";

describe("Image", () => {
  const onImageClick = sinon.spy();

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Image src="foo.jog" onDelete={onImageClick} />, div);
  });

  it("has proper css class", () => {
    const image = shallow(<Image src="foo.jpg" onDelete={onImageClick} />);
    expect(image.hasClass("Image"));
  });

  it("calls onChange callback when changing", () => {
    const image = shallow(<Image src="foo.jpg" onDelete={onImageClick} />);
    image.find("button").simulate("click");
    expect(onImageClick.calledOnce).toBe(true);
  });
});
