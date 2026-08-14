import React from "react";
import '../todo.css/todo.css'
import { useState } from "react";

function CreateTodo({ onCreateTodo }) {
    const [newTodo, setNewTodo] = useState("");
    const createTodo = () => {
        if (!newTodo) return;
        const request = {
            id: Math.floor(Math.random() * 99999),
            content: newTodo
        }
        onCreateTodo(request)
        setNewTodo("");
    }

    return (
        <div className="create-todo">
            <div>
                <h1>Create Todo</h1>
            </div>
            <div className="add-todo">
                <input id="todo-input" type="text" placeholder="Add a new todo..."
                    value={newTodo} onChange={(e) => setNewTodo(e.target.value.replace(/\s+/g, ' '))}
                />
            </div>
            <div className="todo-button">
                <button id="add-todo-button" onClick={createTodo}>
                    Add Todo
                </button>
            </div>
        </div>
    );
}

export default CreateTodo;