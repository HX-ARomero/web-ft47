import React from 'react'
import useFetch from '../hooks/useFetch'
const APIURL = "https://rickandmortyapi.com/api/character"

export default function Characters() {

  const { data, error } = useFetch("episode");

  return (
    <div>
      <h2>Personajes</h2>
      {
        !data && <p>No hay personajes</p>
      }
      {
        data?.results.map(personaje => (
          <div key={personaje.id}>
            <p>{personaje.name}</p>
            <img src={personaje.image} alt={personaje.name} />

          </div>
        ))
      }
    </div>
  )
}
