import React, { Component } from "react";
import "./css/progression.css";
import _ from "lodash";

const Progression = ({ level, count }) => {
  const benchMark = 10;
  const completed = (level / count) * 10;
  const items = _.range(1, benchMark + 1);
  return (
    <React.Fragment>
      <div className="pg">
        {items.map((item) => (
          <div
            key={item}
            className={item <= completed ? "color-" + item : "dark"}
          ></div>
        ))}
      </div>
      <span>{Math.ceil(completed * 10)}% Complete!</span>
    </React.Fragment>
  );
};

export default Progression;
