import React from "react";
import PropTypes from "prop-types";

/**
 * Functional react component for input field.
 * @function
 * @param {object} props - react props
 * @returns {JSX.element} -
 */

const Input = (props) => {
  return <div data-test="component-input"></div>;
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};
export default Input;
