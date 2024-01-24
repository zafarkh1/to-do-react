import React, { useState } from "react";

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, value]);
    setValue("");
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <h1>To Do List</h1>
      <form>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleSubmit}>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDo;
