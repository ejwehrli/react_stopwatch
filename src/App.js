import React from "react";
import "./styles.css";

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.started = false;
    this.state = {
      secondsElapsed: 0
    };
  }

  startClick() {
    this.started = true;
    this.count = setInterval(() => {
      this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
    }, 10);
  }

  stopClick() {
    this.started = false;
    clearInterval(this.count);
  }

  resetClick() {
    this.setState({ secondsElapsed: 0 });
  }

  formatter(time) {
    let middle =
      Math.floor(time / 100) < 10
        ? "0" + Math.floor(time / 100)
        : Math.floor(time / 100);
    let right = time % 100 < 10 ? "0" + (time % 100) : time % 100;
    let left =
      Math.floor(middle / 60) < 10
        ? "0" + Math.floor(middle / 60)
        : Math.floor(middle / 60);

    return `${left}:${
      middle % 60 < 10 ? "0" + (middle % 60) : middle % 60
    }:${right}`;
  }
  render() {
    return (
      <div className="App">
        <h2> stopwatch </h2>
        <h1>{this.formatter(this.state.secondsElapsed)}</h1>
        <button
          onClick={() => {
            return !this.started ? this.startClick() : this.stopClick();
          }}
        >
          Start/Stop
        </button>
        <button onClick={() => this.resetClick()}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;
