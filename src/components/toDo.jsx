import React, { useState, useRef } from "react";
import { v4 as uuid } from "uuid";

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const value = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.current.value) {
      return 0;
    } else {
      setTodos([
        ...todos,
        {
          text: value.current.value,
          id: uuid(),
        },
      ]);
      value.current.value = "";
    }
  };

  const handleDelete = (id) => {
    setTodos((currentTodo) => {
      return currentTodo.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={value} />
        <button>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDo;