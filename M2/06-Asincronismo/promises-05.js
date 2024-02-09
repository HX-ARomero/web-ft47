const axios = require("axios");

// axios
//   .get("https://rickandmortyapi.com/api/character/1")
//   .then(response => response.data)
//   .then(rick => console.log(rick))
//   .catch(error => console.log(error))

async function getMorty() {
  try {
    //* { info..., data: { ...} }
    // const { data } = await axios.get("https://rickandmortyapi.com/api/character/2");
    const response = await axios.get("https://rickandmortyapi.com/api/character/2");
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
}

getMorty();