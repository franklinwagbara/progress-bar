import React, { Component } from "react";
import Timer from "./components/timer";
import Setting from "./components/setting";

class App extends Component {
  state = {
    setTime: new Date().setHours(0, 0, 0),
    startTime: new Date().setHours(0, 0, 0),
    state: 0,
  };

  handleSetTime = (time) => {
    console.log(time);
    this.setState({
      setTime: time,
      startTime: new Date(),
    });
  };

  handleStart = () => {
    this.setState({ state: this.state ^ 1 });
  };

  render() {
    return (
      <div>
        <Timer
          state={this.state.state}
          setTime={this.state.setTime}
          startTime={this.state.startTime}
        />
        <Setting onStart={this.handleStart} onSetTime={this.handleSetTime} />
      </div>
    );
  }
}

export default App;
