import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import React, { useState } from "react";
import '../todo.css/todo.css'

function Todo({ todo, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(todo.content);

    const handleDelete = () => {
        onDelete(todo.id);
    }

    const handleEditClick = () => {
        setIsEditing(true);
    }

    const handleSave = () => {
        if (editValue.trim()) {
            onEdit(todo.id, editValue.trim());
        }
        setIsEditing(false);
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleSave();
        if (e.key === "Escape") {
            setEditValue(todo.content);
            setIsEditing(false);
        }
    }

    return (
        <div className="todo">
            {isEditing ? (
                <input
                    className="todo-edit-input"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onBlur={handleSave}
                    onKeyDown={handleKeyDown}
                    autoFocus
                />
            ) : (
                <div className="todo-text">
                    {todo.content}
                </div>
            )}
            <div className="todo-icons">
                <IoIosRemoveCircle style={{ fontSize: '24px', color: 'red' }} onClick={handleDelete} />
                <FaEdit style={{ fontSize: '24px', color: 'blue', marginRight: '40px' }} onClick={handleEditClick} />
            </div>
        </div>
    )
}
export default Todo;