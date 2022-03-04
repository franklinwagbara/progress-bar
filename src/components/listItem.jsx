import React, { Component } from "react";
import CheckCircle from "./checkCircle";
import "./css/listItem.css";

const ListItem = ({ item }) => {
  return (
    <div className="list">
      <CheckCircle done={item.done} />
      {item.name}
    </div>
  );
};

export default ListItem;
