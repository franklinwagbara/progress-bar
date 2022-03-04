import React, { Component } from "react";
import "./css/progressBar.css";
import Progression from "./progression";

const ProgressBar = ({ heading, message, count, level }) => {
  return (
    <div>
      <h5>{heading}</h5>
      <p>{message}</p>
      <Progression level={level} count={count} />
    </div>
  );
};

export default ProgressBar;
