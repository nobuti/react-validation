import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import sinon from "sinon";
import InputFile from "./InputFile";

describe("InputFile", () => {
  const onFileChange = sinon.spy();
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<InputFile onFileChange={onFileChange} />, div);
  });

  it("calls onChange callback when changing", () => {
    const inputFile = shallow(<InputFile onFileChange={onFileChange} />);
    inputFile
      .find("input")
      .simulate("change", { target: { files: ["foo.jpg"] } });
    expect(onFileChange.calledOnce).toBe(true);
  });
});
