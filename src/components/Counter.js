import React from "react";
import "./Counter.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  handleIncrement = () => {
    const count = this.state.count;
    this.setState({ count: count + 1 });
  };
  handleDecrement = () => {
    const count = this.state.count;
    this.setState({ count: count - 1 });
  };
  render() {
    const add = "+";
    const subtract = "-";
    return (
      <div>
        <center className="container">
          <button onClick={this.handleIncrement}>{add}</button>
          <p>{this.state.count}</p>
          <button onClick={this.handleDecrement}>{subtract}</button>
        </center>
      </div>
    );
  }
}
export default Counter;
