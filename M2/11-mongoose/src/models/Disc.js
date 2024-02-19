const mongoose = require('mongoose');

//! 5- CREAR COLECCIÓN

//! 5- A-CREAR ESQUEMA
const discSchema = new mongoose.Schema({
  //* _id: Mongoose
  // name: String,
  // released: String,
  // rating: Number,
  // genre: String,
  // band: Object

  name: {
    type: String,
    required: true,
    unique: true
  },
  released: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: [ 1, "El Rating mínimo es 1" ],
    max: [ 10, "El Rating máximo es 10" ],
    required: true
  },
  genre: {
    type: String,
    enum: {
      values: ['Rock', 'Trash', 'Reggae', 'Salsa'],
      //* genre: SeMeOcurrióAhora
      message: '{VALUE} no es un género permitido!!!'
    }
  },
  band: Object
});

//* Combinación única entre "name" y "band.name"
//* discSchema.index({ name: 1, "band.name": 1}, { unique: true });

//! 5- B-CREAR MODELO
//* Disc => { }
const Disc = mongoose.model("Disc", discSchema);

module.exports = Disc;