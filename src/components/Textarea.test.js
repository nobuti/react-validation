import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import sinon from "sinon";
import Textarea from "./Textarea";

describe("Textarea", () => {
  const onTextareaChange = sinon.spy();
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Textarea name="foo" onChange={onTextareaChange} />, div);
  });

  describe("error css class", () => {
    it("initially", () => {
      const textarea = shallow(
        <Textarea name="wadus" onChange={onTextareaChange} />
      );
      expect(textarea.find(".TextArea").hasClass("has-error")).toBe(false);
    });

    it("no error", () => {
      const textarea = shallow(
        <Textarea name="wadus" onChange={onTextareaChange} />
      );
      textarea.find("textarea").simulate("blur");
      expect(textarea.find(".TextArea").hasClass("has-error")).toBe(false);
    });

    it("has error", () => {
      const textarea = shallow(
        <Textarea name="wadus" error={true} onChange={onTextareaChange} />
      );
      textarea.find("textarea").simulate("blur");
      expect(textarea.find(".TextArea").hasClass("has-error")).toBe(true);
    });
  });

  it("calls onChange callback when changing", () => {
    const textarea = shallow(
      <Textarea name="wadus" onChange={onTextareaChange} />
    );
    textarea.find("textarea").simulate("change", { target: { value: "foo" } });
    expect(onTextareaChange.calledOnce).toBe(true);
  });

  it("onBlur allow showing errors", () => {
    const textarea = shallow(
      <Textarea name="wadus" onChange={onTextareaChange} />
    );
    expect(textarea.instance().state.showError).toBe(false);
    textarea.find("textarea").simulate("blur");
    expect(textarea.instance().state.showError).toBe(true);
  });
});
