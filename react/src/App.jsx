import "./App.css";

import { useState } from "react";
import EditTodo from "./EditTodo";

const AddTodo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const inputOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const TodoAdd = () => {
    if (inputValue.trim() === "") return;
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const saveEdit = (index, newText) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = newText;
    setTodos(updatedTodos);
    setEditingIndex(null);
  };

  return (
    <>
      <h1>Add Todo</h1>
      <input
        placeholder="Add a new todo..."
        onChange={inputOnChange}
        value={inputValue}
      />
      <button type="submit" onClick={TodoAdd}>
        Add Todo
      </button>

      <div style={{ marginTop: "20px" }}>
        {todos.map((todo, index) => (
          <div
            key={index}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            {editingIndex === index ? (
              <EditTodo
                todo={todo}
                onSave={(newText) => saveEdit(index, newText)}
                onCancel={() => setEditingIndex(null)}
              />
            ) : (
              <>
                <h3>{todo}</h3>
                <button
                  onClick={() => setTodos(todos.filter((_, i) => i !== index))}
                >
                  Delete
                </button>
                <button onClick={() => setEditingIndex(index)}>Edit</button>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default AddTodo;
