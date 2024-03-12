import reactLogo from './assets/react.svg';
import './App.css';
import ToDoCounter from './components/ToDoCounter';
import { useState } from 'react';
import ToDoList from './components/ToDoList';
import AddToDo from './components/AddToDo';

function App() {

  const [ contadorEstado, setContadorEstado ] = useState(0);
  const [ allTodos, setAllTodos ] = useState([]);
  //* allTodos = ['Tarea-1', 'Tarea-2']

  return (
    <div>
      <h1>ToDo List</h1>
      <AddToDo
        setAllTodos={setAllTodos}
        setContadorEstado={setContadorEstado}
      />
      <hr />
      <ToDoCounter
        contadorEstado={contadorEstado}
        setContadorEstado={setContadorEstado}
        titulo={'Tareas pendientes: '}
      />
      <ToDoList allTodos={allTodos} />
      <hr />
      <img src={reactLogo} className="logo react" alt="React logo" />
    </div>
  );
}

export default App;
