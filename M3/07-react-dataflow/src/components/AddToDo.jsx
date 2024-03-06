import React, { useState } from 'react';

export default function AddToDo({ setAllTodos, setContadorEstado}) {
  
  const [ newToDo, setNewToDo ] = useState('');
  const handleInputChange = (evento) => {
    setNewToDo(evento.target.value);
  }
  const handleSubmit = (evento) => {
    evento.preventDefault();
    if(!newToDo) return alert('Debe ingresar tarea!!!');
    setAllTodos(allToDos => [...allToDos, newToDo]);
    setContadorEstado(contadorestado => contadorestado + 1);
    setNewToDo('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Ingresar nueva tarea: </label>
        <input
          type="text"
          value={newToDo}
          placeholder='Ingresar nueva tarea...'
          onChange={handleInputChange}
        />
        <input type="submit" value="Agregar" />
      </form>
    </div>
  );
}