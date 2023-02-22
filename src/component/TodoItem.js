import React from "react";
import "../style/component/TodoItem.css";

const TodoItem = (props) => {
  const getStyle = () => {
    let textDecoration = "";
    if (props.todo.completed) {
      textDecoration = "line-through";
    } else {
      textDecoration = "none";
    }
    return {
      fontSize: "24px",
      textDecoration: textDecoration,
      flexGrow: "1",
      color: "dimgrey",
    };
  };

  // const wrapperStyle = {
  //   display: "flex",
  //   alignItems: "left",
  //   border: "2px solid #f4f4f4",
  //   padding: "12px",
  // };

  // const buttonStyle = {
  //   backgroundColor: "#fff",
  //   color: "#fff",
  //   height: "1rem",
  //   width: "1rem",
  //   borderRadius: "100%",
  //   cursor: "pointer",
  //   fontSize: "1rem",
  // };

  // const toggleCompleted = () => {
  //   console.log("this is toggleCompleted function");
  // };

  // const deleteTodo = () => {
  //   console.log("todo terhapus");
  // };

  return (
    <div className="TodoItem">
      <input
        type="checkbox"
        onChange={() => props.toggleCompleted(props.todo.id)}
      />
      <p style={getStyle()}>{props.todo.title}</p>
      <button
        onClick={() => props.deleteTodo(props.todo.id)}
        className="btn-delete">
        x
      </button>
    </div>
  );
};

export default TodoItem;
