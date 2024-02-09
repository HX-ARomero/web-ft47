const getPersonaje = function() {
  fetch("https://rickandmortyapi.com/api/character/1") //* RETORNA PROMESA !!!
    .then(
      //* succesHandler
      (respuesta) => respuesta.json()
    )
    .then(
      //* succesHandler
      (personaje) => console.log(personaje)
    )
    .catch(
      //! errorHandler
      (error) => console.log(error)
    )
}

getPersonaje();