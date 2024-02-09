const getPersonajeAsync = async function() {
  try {
    //* Código asíncrono
    const respuesta = await fetch("https://rickandmortyapi.com/api/character/2");
    const morty = await respuesta.json();
    console.log(morty);
  } catch (error) {
    console.log(error);
  }
};

getPersonajeAsync();