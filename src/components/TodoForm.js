import { v4 as uuid } from "uuid";
import React from "react";
import { useState } from "react";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid() });
      setTodo({ ...todo, task: "" });
    }
  }
  return (
    <form>
      <input
        name="task"
        type="text"
        value={todo.task}
        onChange={handleTaskInputChange}
        onSubmit={handleSubmit}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;
