const characters = require("./characters.js");

const cards = document.createElement("div");

characters.map((character) => {
  cards.innerHTML += `
    <div style="border:1px solid black; border-radius:15px; text-align:center; margin:50px 150px 20px 150px;">
      <h2>${character.firstName} ${character.lastName}</h2>
      <img style="width: 100px" src="${character.image}" alt="${character.firstName}">
    </div>
  `;
});

module.exports = cards;