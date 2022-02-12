import React, { Component } from "react";
import "./css/display.css";
import format from "../utils/format";

class Timer extends Component {
  state = { hours: 0, minutes: 0, seconds: 0 };

  componentDidMount = () => {
    setInterval(this.updateTime, 1000);
  };

  updateTime = () => {
    let { hours, minutes, seconds } = this.state;

    if (this.props.state === 0) return;
    const { setTime, startTime } = this.props;
    console.log(startTime);
    const oneHour = new Date().setHours(2, 0, 0, 0);
    const currTime = new Date().getTime();
    const diff =
      new Date(startTime).getTime() +
      new Date(setTime).getTime() -
      currTime +
      oneHour;

    seconds = Math.floor(diff / 1000) % 60;
    minutes = Math.floor(diff / 1000 / 60) % 60;
    hours = Math.floor(diff / 1000 / 3600) % 24;

    this.setState({ hours, minutes, seconds });
  };

  render() {
    const time = new Date();
    return (
      <div className="count-down">
        <div id="hours">
          <p>{format(this.state.hours)}</p>
          <span>hours</span>
        </div>
        <div id="minutes">
          <p>{format(this.state.minutes)}</p>
          <span>minutes</span>
        </div>
        <div id="seconds">
          <p>{format(this.state.seconds)}</p>
          <span>seconds</span>
        </div>
      </div>
    );
  }
}

export default Timer;
