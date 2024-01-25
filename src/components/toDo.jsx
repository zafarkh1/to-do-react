// import React, { useState } from "react";

// const ToDo = () => {
//   const [todos, setTodos] = useState([]);
//   const [value, setValue] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setTodos([...todos, value]);
//     setValue("");
//   };

//   const handleDelete = (index) => {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//   };

//   return (
//     <>
//       <h1>To Do List</h1>
//       <form>
//         <input
//           type="text"
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//         />
//         <button onClick={handleSubmit}>Add Todo</button>
//       </form>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo}
//             <button onClick={() => handleDelete(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default ToDo;

import React, { useState, useRef } from "react";
import { v4 as uuid } from "uuid";

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const value = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: value.current.value,
        id: uuid(),
      },
    ]);
    value.current.value = "";
  };

  const handleDelete = (id) => {
    // const newTodos = [...todos];
    // newTodos.splice(index, 1);
    // setTodos(newTodos);
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