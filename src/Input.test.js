import React from "react";
import { findByTestAttr, checkProps } from "../test/testUtils";
import { shallow } from "enzyme";
import Input from "./Input";

/**
 * setup function for input component
 * @returns {ShallowWrapper}
 */
const defaultProps = { secretWord: "party" };
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Input {...setupProps} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, "component-input");
  expect(inputComponent.length).toBe(1);
});

test("does not throw warning with expected props", () => {
  const expectedProps = { secretWord: "party" };
  checkProps(Input, expectedProps);
});

describe("State controlled input field", () => {
  let mocksetCurrectGuess = jest.fn();
  let wrapper;
  beforeEach(() => {
    mocksetCurrectGuess.mockClear();
    React.useState = jest.fn(() => ["", mocksetCurrectGuess]);
    wrapper = setup();
  });
  test("State updates with value of input box upon change", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");
    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);
    expect(mocksetCurrectGuess).toHaveBeenCalledWith("train");
  });

  test("State updates with null value upon submit click", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click", { preventDefault() {} });
    expect(mocksetCurrectGuess).toHaveBeenCalledWith("");
  });
});
