import { useState } from "react";
import Todo from "./Todo";

function TodoList({ todos, toggleComplete }) {
  return (
    <ul style={{ listStyle: "none" }}>
      {todos.map((todo) => (
        <Todo todo={todo} toggleComplete={toggleComplete} />
      ))}
    </ul>
  );
}
export default TodoList;
