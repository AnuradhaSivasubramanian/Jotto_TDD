import React from "react";

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - react props
 * @returns {JSX.element} - Rendered component (or null if 'success' prop is false)
 */

export default props => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulation! you guessed the word
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats"></div>;
  }
};
