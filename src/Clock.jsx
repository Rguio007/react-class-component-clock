import { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.updatehour(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  updatehour() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.time}</h1>
      </div>
    );
  }
}

export default Clock;
