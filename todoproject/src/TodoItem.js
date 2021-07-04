import React from "react";

function TodoItem(props) {
  const completedStyle = {
    fontSyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through",
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <h2 style={props.item.completed ? completedStyle : null}>
        {props.item.text}
      </h2>
    </div>
  );
}

export default TodoItem;
