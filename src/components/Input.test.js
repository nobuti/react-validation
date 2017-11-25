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

  describe("error css class", () => {
    it("initially", () => {
      const input = shallow(
        <Input name="wadus" onChange={onInputChange} error={false} />
      );
      input.find("input").simulate("blur");
      expect(input.find(".Input").hasClass("has-error")).toBe(false);
    });

    it("no error", () => {
      const input = shallow(
        <Input name="wadus" onChange={onInputChange} error={false} />
      );
      input.find("input").simulate("blur");
      expect(input.find(".Input").hasClass("has-error")).toBe(false);
    });

    it("has error", () => {
      const input = shallow(
        <Input name="wadus" onChange={onInputChange} error={true} />
      );
      input.find("input").simulate("blur");
      expect(input.find(".Input").hasClass("has-error")).toBe(true);
    });
  });

  it("calls onChange callback when changing", () => {
    const input = shallow(<Input name="wadus" onChange={onInputChange} />);
    input.find("input").simulate("change", { target: { value: "foo" } });
    expect(onInputChange.calledOnce).toBe(true);
  });

  it("onBlur allow showing errors", () => {
    const input = shallow(<Input name="wadus" onChange={onInputChange} />);
    expect(input.instance().state.showError).toBe(false);
    input.find("input").simulate("blur");
    expect(input.instance().state.showError).toBe(true);
  });
});
