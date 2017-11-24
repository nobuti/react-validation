import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import sinon from "sinon";
import Input from "./Input";

describe("Input", () => {
  const onInputChange = sinon.spy();

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Input name="wadus" onChange={onInputChange} />, div);
  });

  it("has proper css class", () => {
    const input = shallow(<Input name="wadus" onChange={onInputChange} />);
    expect(input.hasClass("Input"));
  });

  it("calls onChange callback when changing", () => {
    const input = shallow(<Input name="wadus" onChange={onInputChange} />);
    input.find("input").simulate("change", { target: { value: "foo" } });
    expect(onInputChange.calledOnce).toBe(true);
  });
});
