import React from "react";
let myfunc = "";
class Logger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleString()
    };
  }

  componentDidMount() {
    myfunc = setInterval(
      () => this.setState({ date: Date().toLocaleString() }),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(myfunc);
  }
  componentDidUpdate(prevState) {
    if (prevState.date !== this.state.date) {
      console.log(this.state.date);
    }
  }

  render() {
    return <h1>{this.state.date}</h1>;
  }
}
export default Logger;
