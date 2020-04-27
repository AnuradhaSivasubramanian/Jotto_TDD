import React from "react";
import PropTypes from "prop-types";

/**
 * Functional react component for input field.
 * @function
 * @param {object} props - react props
 * @returns {JSX.element} -
 */

const Input = (props) => {
  const [currentGuess, setCurrentGuess] = React.useState("");
  const handleClick = (e) => {
    e.preventDefault();
    setCurrentGuess("");
    //TODO
    //update guessedWord context
    //check against secretWord and optionally update success context
  };
  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="enter your guess"
          value={currentGuess}
          onChange={(event) => setCurrentGuess(event.target.value)}
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};
export default Input;
