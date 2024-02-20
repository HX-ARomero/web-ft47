//* mongoose => hace referencia al objeto que tiene todos los métodos
//* NO es necesario instanciar !!!!!
const mongoose = require("mongoose");
require("dotenv").config();

const dbConfig = async () => {
  //* La conexión "ES UNA PROMESA"
  await mongoose.connect(
    process.env.MONGODB_URI
  );
};


module.exports = dbConfig;