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
