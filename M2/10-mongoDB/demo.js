//* COLECCIÓN ORIGEN
const origen1 = {
  "_id": ObjectId("origin_10"),
  "name": "Earth (C-137)",
  "url": "https://rickandmortyapi.com/api/location/1"
}


//* COLECCIÓN PERONAJES

const personaje1 = {
  "_id": 1,
  "name": "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": ObjectId("origin_10"),
  "location": {
    "name": "Citadel of Ricks",
    "url": "https://rickandmortyapi.com/api/location/3"
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  "url": "https://rickandmortyapi.com/api/character/1",
  "created": "2017-11-04T18:48:46.250Z"
}