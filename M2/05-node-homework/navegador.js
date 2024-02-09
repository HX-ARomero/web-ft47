//* characters
const characters = [
  {
    firstName: "Lisa",
    lastName: "Simpson",
    image:
      "https://easydrawingguides.com/wp-content/uploads/2022/09/Easy-Lisa-Simpson.png",
  },
  {
    firstName: "Bart",
    lastName: "Simpson",
    image:
      "https://i.pinimg.com/736x/31/fb/09/31fb09e9fc2d68dc15ad8adb73cba747.jpg",
  },
];

//* cardGenerator
const cards = document.createElement("div");

characters.map((character) => {
  cards.innerHTML += `
    <div style="border:1px solid black; border-radius:15px; text-align:center; margin:50px 150px 20px 150px;">
      <h2>${character.firstName} ${character.lastName}</h2>
      <img style="width: 100px" src="${character.image}" alt="${character.firstName}">
    </div>
  `;
});

//* index
//* NO TIENE VARIABLES QUE UTILICE OTRO SCRIPT
//* ENTRY POINT => ARCHIVO que no expone variables
const container = document.getElementById("container");

container.appendChild(cards);