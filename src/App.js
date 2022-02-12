import React, { Component } from "react";
import Timer from "./components/timer";
import Setting from "./components/setting";

class App extends Component {
  state = {};

  handleSetTime = (time) => {
    console.log(time);
  };

  render() {
    const newYear = "1 Jan 2023";
    return (
      <div>
        <Timer end={newYear} />
        <Setting onSetTime={this.handleSetTime} />
      </div>
    );
  }
}

export default App;
