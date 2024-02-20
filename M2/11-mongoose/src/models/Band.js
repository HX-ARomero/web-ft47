//* mongoose hace referencia al mismo objeto que en "dbConfig.js"
const mongoose = require("mongoose");

//* Creación del Esquema:
const bandSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true, // unique NO es un Validator !!!!!
  },
  country: String,
});

//* Convertimos el Esquema en un Modelo:
const Band = mongoose.model("Band", bandSchema);

module.exports = Band;
