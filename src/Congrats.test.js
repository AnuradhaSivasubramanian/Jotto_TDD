import React from "react";
import { shallow } from "enzyme";

import Congrats from "./Congrats";

import { findByTestAttr, checkProps } from "../test/testUtils";

/**
 * Factory function to create a ShallowWrapper for the Congrats Component.
 * @function setup
 * @param {object} props - Component specific to this setup
 * @returns {ShallowWrapper}
 */
const defaultProps = { success: false };
const setup = (props = {}) => {
  const setUpProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setUpProps} />);
};

test("renders without error", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});
test("renders nothing when 'sucess' props is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});
test("renders non empty congrats message when Success is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0);
});

test("does not throw warning with expected props", () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
