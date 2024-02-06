// console.log("Funciona!!!")
let id = 1;

function getPersonaje() {
  //$.get(`https://rickandmortyapi.com/api/character/${id}`, (personaje, status) => {
  $.get("https://rickandmortyapi.com/api/character/" + id++, (personaje, status) => {
    // console.log(personaje);
    console.log(status);
    // id = id + 1;
    // id += 1;
    // id++;

    if(status === "success") {
      const title = document.createElement("h3");
      title.innerText = `Nombre: ${personaje.name}`;
      const image = document.createElement("img");
      image.src = personaje.image;
      image.alt = personaje.name;
      image.style = "width:150px";
      const line = document.createElement("hr");
    
      const container = document.getElementById("respuesta");
      container.append(title, image, line);
    } else {
      //* appendear h3 => error
    }
  })
}

document.getElementById("boton").addEventListener("click", getPersonaje);