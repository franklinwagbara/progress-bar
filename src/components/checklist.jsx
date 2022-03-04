import React, { Component } from "react";
import "./css/checklist.css";
import ListItem from "./listItem";

const CheckList = ({ items }) => {
  console.log(items);
  return (
    <div>
      <h6>Check List</h6>
      {items && items.map((item) => <ListItem key={item._id} item={item} />)}
    </div>
  );
};

export default CheckList;
