import React, { Component } from "react";
import "./css/display.css";

class Timer extends Component {
  state = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  componentDidMount = () => {
    setInterval(this.updateTime, 1000);
  };

  updateTime = () => {
    const end = new Date(this.props.end);
    const currTime = new Date().getTime();
    const diff = end.getTime() - currTime;

    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const hours = Math.floor(diff / 1000 / 3600) % 24;
    const days = Math.floor(diff / 1000 / 3600 / 24);

    const time = new Date();
    this.setState({ days, hours, minutes, seconds });
  };

  format(val) {
    if (val < 10) return `0${val}`;
    return val;
  }

  render() {
    const time = new Date();
    return (
      <div className="count-down">
        <div id="days">
          <p>{this.format(this.state.days)}</p>
          <span>days</span>
        </div>
        <div id="hours">
          <p>{this.format(this.state.hours)}</p>
          <span>hours</span>
        </div>
        <div id="minutes">
          <p>{this.format(this.state.minutes)}</p>
          <span>minutes</span>
        </div>
        <div id="seconds">
          <p>{this.format(this.state.seconds)}</p>
          <span>seconds</span>
        </div>
      </div>
    );
  }
}

export default Timer;
