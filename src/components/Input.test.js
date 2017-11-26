import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import sinon from "sinon";
import Input from "./Input";
import FormField from "./FormField";

describe("Input", () => {
  const onInputChange = sinon.spy();

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Input name="wadus" onChange={onInputChange} />, div);
  });

  describe("error css class", () => {
    it("initially", () => {
      const input = mount(
        <Input name="wadus" onChange={onInputChange} error={false} />
      );
      input.find("input").simulate("blur");
      expect(input.find(".Input").hasClass("has-error")).toBe(false);
      input.unmount();
    });

    it("no error", () => {
      const input = mount(
        <Input name="wadus" onChange={onInputChange} error={false} />
      );
      input.find("input").simulate("blur");
      expect(input.find(".Input").hasClass("has-error")).toBe(false);
      input.unmount();
    });

    it("has error", () => {
      const input = mount(
        <Input name="wadus" onChange={onInputChange} error={true} />
      );
      input.find("input").simulate("blur");
      expect(input.find(".Input").hasClass("has-error")).toBe(true);
      input.unmount();
    });
  });

  it("calls onChange callback when changing", () => {
    const input = mount(<Input name="wadus" onChange={onInputChange} />);
    input.find("input").simulate("change", { target: { value: "foo" } });
    expect(onInputChange.calledOnce).toBe(true);
    input.unmount();
  });

  it("onBlur allow showing errors", () => {
    const input = mount(<Input name="wadus" onChange={onInputChange} />);
    expect(input.find(FormField).instance().state.showError).toBe(false);
    input.find("input").simulate("blur");
    expect(input.find(FormField).instance().state.showError).toBe(true);
    input.unmount();
  });
});
