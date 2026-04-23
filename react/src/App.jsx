import "./App.css";
import { useState } from "react";

const TodoMain = () => {
  const [Update, SetUpdate] = useState("");
  const [Todo, SetNewTodo] = useState([]);

  const Content = (todos) => {
    SetUpdate(todos.target.value);
  };

  const AddTodo = () => {
    SetNewTodo([...Todo, Update]);
    SetUpdate("");
  };

  return (
    <>
      <h1>Todo Application</h1>
      <div>
        <div className="flex">
          <input onChange={Content}></input>
        </div>
        <div>
          <button onClick={AddTodo}>ADD</button>
        </div>
      </div>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {Todo.map((todos, index) => {
          return (
            <div
              key={index}
              style={{
                marginTop: "10px",
                display: "flex",
                flexDirection: "row",
                gap: "40px",
                justifyContent: "center",
              }}
            >
              <h1>{todos}</h1>
              <button
                onClick={() => SetNewTodo(Todo.filter((_, i) => i !== index))}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default TodoMain;
