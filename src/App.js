import React from "react";
import Todos from "./component/Todos";
import TodoForm from "./component/TodoForm";
import "./style/App.css";
import Jumbotron from "./component/Jumbotron";

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Finish Progate React Course",
        completed: true,
      },
      {
        id: 2,
        title: "Have lunch with Guru Domba",
        completed: false,
      },
      {
        id: 3,
        title: "Study React with Ninja Ken",
        completed: false,
      },
    ],
  };

  toggleCompleted = (todoId) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  deleteTodo = (todoId) => {
    const removeItem = this.state.todos.filter((todo) => todo.id !== todoId);
    this.setState({ todos: removeItem });
  };

  addTodo = (todoTitle) => {
    const todos = this.state.todos;
    if (todoTitle === "") {
      return;
    }
    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    };
    const updatedTodos = this.state.todos.concat(newTodo);
    this.setState({ todos: updatedTodos });
  };

  render() {
    return (
      <div className="App" style={{ textAlign: "center", padding: "12px" }}>
        <Jumbotron />
        <TodoForm addTodo={this.addTodo} />
        <Todos
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
