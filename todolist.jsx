import React from "react";
import '../todo.css/todo.css'
import Todo from "./todo.jsx";

function TodoList({ todos, onDelete, onEdit }) {
    return (
        <div className="todo-list">
            <div>
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit} />
                ))}
            </div>
        </div>
    )
}

export default TodoList;