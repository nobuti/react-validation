import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import sinon from "sinon";
import Textarea from "./Textarea";
import FormField from "./FormField";

describe("Textarea", () => {
  const onTextareaChange = sinon.spy();
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Textarea name="foo" onChange={onTextareaChange} />, div);
  });

  describe("error css class", () => {
    it("initially", () => {
      const textarea = mount(
        <Textarea name="wadus" onChange={onTextareaChange} />
      );
      expect(textarea.find(".TextArea").hasClass("has-error")).toBe(false);
      textarea.unmount();
    });

    it("no error", () => {
      const textarea = mount(
        <Textarea name="wadus" onChange={onTextareaChange} />
      );
      textarea.find("textarea").simulate("blur");
      expect(textarea.find(".TextArea").hasClass("has-error")).toBe(false);
      textarea.unmount();
    });

    it("has error", () => {
      const textarea = mount(
        <Textarea name="wadus" error={true} onChange={onTextareaChange} />
      );
      textarea.find("textarea").simulate("blur");
      expect(textarea.find(".TextArea").hasClass("has-error")).toBe(true);
      textarea.unmount();
    });
  });

  it("calls onChange callback when changing", () => {
    const textarea = mount(
      <Textarea name="wadus" onChange={onTextareaChange} />
    );
    textarea.find("textarea").simulate("change", { target: { value: "foo" } });
    expect(onTextareaChange.calledOnce).toBe(true);
    textarea.unmount();
  });

  it("onBlur allow showing errors", () => {
    const textarea = mount(
      <Textarea name="wadus" onChange={onTextareaChange} />
    );
    expect(textarea.find(FormField).instance().state.showError).toBe(false);
    textarea.find("textarea").simulate("blur");
    expect(textarea.find(FormField).instance().state.showError).toBe(true);
  });
});
