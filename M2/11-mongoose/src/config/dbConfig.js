//* 1- Instalamos mongoose npm install mongoose
//* 2- Creamos conexión
//* 3- Invocamos conexión desde index.js
//? 4- CREAR BBDD // test (por defecto)
//! 5- CREAR COLECCIÓN

//* mongoose => ODM => BBDD (MongoDB Atlas)
const mongoose = require('mongoose');
const dbName = "discs";
//? 4- CREAR BBDD // test (por defecto)
const ATLAS_URI = `mongodb+srv://arieldemo2024:sXAyFqBffpCRikoN@cluster0.qx26yjn.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const dbConfig = async () => {
  //* La conexión ES una PROMESA;
  await mongoose.connect(ATLAS_URI);
};

module.exports = dbConfig;
