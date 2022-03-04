import React, { Component } from "react";
import "./css/checkCircle.css";

const CheckCircle = ({ done }) => {
  return (
    <div className={done ? "circle tick" : "circle"}>
      {done && <span>&#10003;</span>}
    </div>
  );
};

export default CheckCircle;
