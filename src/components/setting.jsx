import React, { Component } from "react";
import format from "../utils/format";
import "./css/setting.css";

class Setting extends Component {
  state = {
    enable: 0,
    time: this.props.time,
    hour: 0,
    minute: 0,
    second: 0,
    set: 0,
  };

  handleSubmit = () => {
    const { hour, minute, second, enable } = this.state;
    if (enable == 1) {
      if (hour === 0 && minute === 0 && second === 0) {
        alert("Time can not be zero!");
        return;
      }
      const time = new Date();
      time.setHours(hour, minute, second);
      this.props.onSetTime(time);
      this.setState({ time, set: 1 });
      return;
    }

    this.setState({ enable: enable ^ 1 });
  };

  handleChange = (e) => {
    if (e.target.name == "hours") {
      const hour = format(e.target.value);
      this.setState({ hour });
    } else if (e.target.name == "minutes") {
      const minute = format(e.target.value);
      this.setState({ minute });
    } else if (e.target.name == "seconds") {
      const second = format(e.target.value);
      this.setState({ second });
    }
  };

  handleStart = () => {
    this.setState({ set: 0, enable: 0 });
    this.props.onStart();
  };
  render() {
    let counter = 0;
    let counter2 = 0;
    let counter3 = 0;

    let displayPanel = this.state.enable === 0 ? "hide" : "show";
    let command = this.state.enable === 0 ? "Enable" : "Set";
    let opacity = this.state.enable === 0 ? "transparent" : "opaque";
    if (this.state.set === 1) opacity = "hide";
    let startClass = this.state.set === 0 ? "hide" : "show";
    return (
      <div className="setting">
        <div className={displayPanel}>
          <label>Set Time:</label>
          <select
            name="hours"
            id="hours"
            onChange={this.handleChange}
            value={this.state.hour}
          >
            {new Array(23).fill(0).map((val) => (
              <option key={counter++}>{format(counter)}</option>
            ))}
          </select>
          <span>HH</span>
          <select
            name="minutes"
            id="minutes"
            value={this.state.minute}
            onChange={this.handleChange}
          >
            {new Array(60).fill(0).map((val) => (
              <option key={counter2++}>{format(counter2)}</option>
            ))}
          </select>
          <span>MM</span>
          <select
            name="seconds"
            id="seconds"
            value={this.state.second}
            onChange={this.handleChange}
          >
            {new Array(60).fill(0).map((val) => (
              <option key={counter3++}>{format(counter3)}</option>
            ))}
          </select>
          <span>SS</span>
        </div>
        <button
          id="enable"
          className={opacity}
          onClick={this.handleSubmit}
          value="Enable"
        >
          {command}
        </button>
        <button
          id="start"
          className={startClass}
          onClick={this.handleStart}
          value="start"
        >
          Start
        </button>
      </div>
    );
  }
}

export default Setting;
