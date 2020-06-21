import React, { useState, useMemo } from "react";
import "../List.css";
import Todo from "./Todo";
function List(props) {
  if (props.data === "") return;

  let list = props.data.map((items) => (
    <Todo data={items.todo} key={items.Id} id={items.Id} />
  ));
  console.log(list);

  return <div className="list">{list}</div>;
}

export default List;
