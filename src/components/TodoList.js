import React from "react";
import Todo from "./Todo";

function TodoList({ todos, toggleComplete, removeTodo }) {
  return (
    <ul style={{ listStyle: "none" }}>
      {todos.map((todo) => (
        <Todo
          todo={todo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        ></Todo>
      ))}
    </ul>
  );
}

export default TodoList;
