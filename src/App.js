import React, { Component } from "react";
import Timer from "./components/timer";

class App extends Component {
  state = {};

  render() {
    const newYear = "1 Jan 2023";
    return (
      <div>
        <Timer end={newYear} />
      </div>
    );
  }
}

export default App;
