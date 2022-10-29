import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Todo</h1>
        <TodoForm addTodo={addTodo}></TodoForm>
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        ></TodoList>
      </header>
    </div>
  );
}

export default App;
