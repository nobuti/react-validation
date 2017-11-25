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

  describe("css class", () => {
    it("no error", () => {
      const input = shallow(
        <Input name="wadus" onChange={onInputChange} error={false} />
      );
      expect(input.find("input").hasClass("Input")).toBe(true);
      expect(input.find("input").hasClass("has-error")).toBe(false);
    });

    it("has error", () => {
      const input = shallow(
        <Input name="wadus" onChange={onInputChange} error={true} />
      );
      expect(input.find("input").hasClass("Input")).toBe(true);
      expect(input.find("input").hasClass("has-error")).toBe(true);
    });
  });

  it("calls onChange callback when changing", () => {
    const input = shallow(<Input name="wadus" onChange={onInputChange} />);
    input.find("input").simulate("change", { target: { value: "foo" } });
    expect(onInputChange.calledOnce).toBe(true);
  });
});
