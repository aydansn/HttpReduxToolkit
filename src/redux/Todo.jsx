import React from "react";

const Todo = ({ todo }) => {
  return <div style={{ border: "1px solid pink" }}>{todo.title}</div>;
};

export default Todo;
