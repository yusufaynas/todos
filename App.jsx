import React, { useState } from "react";
import CreateTodo from "./components/createTodo.jsx";
import TodoList from "./components/todoList.jsx";

function App() {
  const [todos, setTodos] = useState([]);

  const handleCreateTodo = (newTodo) => {
    setTodos((prev) => [...prev, newTodo]);
  }

  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  const handleEditTodo = (id, newContent) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, content: newContent } : todo
      )
    );
  }

  return (
    <div className="app">
      <CreateTodo onCreateTodo={handleCreateTodo} />
      <TodoList todos={todos} onDelete={handleDeleteTodo} onEdit={handleEditTodo} />
    </div>
  );
}

export default App;