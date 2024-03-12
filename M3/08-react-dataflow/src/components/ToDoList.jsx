import React from 'react';

export default function ToDoList(props) {
  //* props = { allTodos }
  return (
    <div>
      <h3>Mis Tareas</h3>
      <ul>
        {
          props.allTodos.map((todo, index) => (
            <li key={index} >{todo}</li>
          ))
        }
      </ul>
    </div>
  );
}
