import React from "react";
import PropTypes from "prop-types";

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - react props
 * @returns {JSX.element} - Rendered component (or null if 'success' prop is false)
 */

const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats" className="alert alert-success">
        <span data-test="congrats-message">
          Congratulation! you guessed the word
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats"></div>;
  }
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};
export default Congrats;
