import { useEffect, useState } from 'react'
import './App.css'
import CounterClass from './components/CounterClass'
import CounterFunction from './components/CounterFunction'
import Tarjeta from './components/Tarjeta';
import Detail from './components/Detail';

function App() {

  const [personajes, setPersonajes] = useState([]);
  const [detail, setDetail] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then(response => response.json())
      // .then(data => data.slice(0, 20))
      .then(personajesAPI => setPersonajes(personajesAPI));
  }, []);

  const clickHandler = (id) => {
    setId(id);
    setDetail(true);
  }

  const closeHandler = () => {
    setDetail(false);
  }

  return (
    <>
      <h2>Detail</h2>
      {
        detail
        ? <Detail closeHandler={closeHandler} id={id} />
        : null
      }
      <hr />
      <h2>Personajes</h2>
      {
        personajes.map((personaje, index) => (
          <Tarjeta
            key={index}
            personaje={personaje}
            clickHandler={clickHandler}
          />
        ))
      }
      <hr />
    </>
  )
}

export default App
