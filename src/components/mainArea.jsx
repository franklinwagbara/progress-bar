import React, { Component } from "react";
import "./css/mainArea.css";

const MainArea = ({ task, onSubmit, end }) => {
  console.log(task);
  return (
    <div>
      <h3>Work Area</h3>
      <div className="work-area">
        <h4>{task && task.name}</h4>
        <button onClick={onSubmit} className="btn btn-primary">
          {end === false ? "Next" : "End"}
        </button>
      </div>
    </div>
  );
};

export default MainArea;
