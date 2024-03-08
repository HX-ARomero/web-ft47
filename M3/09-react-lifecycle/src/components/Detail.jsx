import { useEffect, useState } from "react";

export default function Detail({ closeHandler, id }) {

  const [personaje, setPersonaje] = useState({});

  useEffect(() => {
    fetch(`https://hp-api.onrender.com/api/character/${id}`)
      .then(response => response.json())
      .then(data => data[0])
      .then(personajeEncontrado => {
        setPersonaje(personajeEncontrado)
      })
  }, [personaje]);

  return (
    <div
      style={{
        backgroundColor: "blue",
        borderRadius: "10px",
      }}
    >
      <button onClick={closeHandler}>Cerrar</button>
      <h3>Nombre: {personaje.name}</h3>
      <h4>Casa: {personaje.house}</h4>
      <h4>Especie: {personaje.species}</h4>
      <img src={personaje.image} alt={personaje.name} style={{height: "150px"}} />
    </div>
  );
}
