import React, { Component } from "react";
import TodoModel from "../models";
import { connect } from "react-redux";
import RootState from "../state";
import { addTodo } from "./actionCreators";

interface Props {
  todos: TodoModel[];
}

class TodoList extends Component<Props, {}> {
  render() {
    const { todos } = this.props;
    return (
      <div>
        <ul>
          {todos.map(({ name, completed }) => (
            <li>{`name: ${name}, completed: ${completed ? "Yes" : "No"}`}</li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ todos }: RootState) {
  return {
    todos
  };
}
function mapDispatchToProps() {
  return {
    addTodo
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
