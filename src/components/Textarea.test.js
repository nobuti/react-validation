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

  it("has proper css class", () => {
    const textarea = shallow(
      <Textarea name="wadus" onChange={onTextareaChange} />
    );
    expect(textarea.hasClass("Textarea"));
  });

  it("calls onChange callback when changing", () => {
    const textarea = shallow(
      <Textarea name="wadus" onChange={onTextareaChange} />
    );
    textarea.find("textarea").simulate("change", { target: { value: "foo" } });
    expect(onTextareaChange.calledOnce).toBe(true);
  });
});
