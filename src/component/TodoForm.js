import React from "react";
import "../style/component/TodoForm.css";

class TodoForm extends React.Component {
  state = { title: "" };

  handleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    // console.log(this.state.title);
    return (
      <div style={{ marginBottom: "32px" }} className="TodoForm">
        <form
          onSubmit={(event) => {
            this.handleSubmit(event);
          }}>
          <input
            type="text"
            placeholder="Add your ToDo"
            // style={{ height: "66px", width: "40%", fontSize: "16px" }}
            onChange={(event) => {
              this.handleChange(event);
            }}
            value={this.state.title}
          />
          <button className="btn-add">Add ToDo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
