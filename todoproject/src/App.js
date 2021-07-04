import React from "react";
import todosData from "./todosData";
import TodoItem from "./TodoItem";
// import { text } from "body-parser";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos,
      };
    });
  }

  render() {
    const todoComponents = todosData.map((temp) => (
      <TodoItem key={temp.id} item={temp} handleChange={this.handleChange} />
    ));

    return <div className="todo-list">{todoComponents}</div>;
  }
}

export default App;
