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
  };

  handleClick = () => {
    if (this.state.enable == 1) {
      const time = new Date();
      time.setHours(this.state.hour, this.state.minute, this.state.second);
      this.props.onSetTime(time);
      this.setState({ time });
      return;
    }
    const enable = this.state.enable ^ 1;
    this.setState({ enable });
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
  render() {
    let counter = 0;
    let counter2 = 0;
    let counter3 = 0;

    let displayPanel = this.state.enable === 0 ? "hide" : "show";
    let command = this.state.enable === 0 ? "Enable" : "Set";
    let opacity = this.state.enable === 0 ? "transparent" : "opaque";

    return (
      <div className="setting">
        <div className={displayPanel}>
          <label>Set Time:</label>
          <select
            name="hours"
            id="hours"
            value={this.state.hour}
            onChange={this.handleChange}
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
          onClick={this.handleClick}
          value="Enable"
        >
          {command}
        </button>
      </div>
    );
  }
}

export default Setting;
