//* mongoose hace referencia al mismo objeto que en "dbConfig.js"
const mongoose = require("mongoose");
// También funcionaría lo siguiente:
// const { Schema } = requires("mongoose");

//* Creación del Esquema:
const discSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // unique: true, // unique NO es un Validator !!!!!
  },
  released: {
    type: String,
    required: [true, "La fecha de lanzamiento es obligatoria"], //* CUSTOM VALIDATOR
    // validate: {
    //   validator: function (input) {
    //     return input.includes("http");
    //   },
    //   message: (props) => `${props.value} no es una url válida`,
    // },
  },
  rating: {
    type: Number,
    required: [true, "El rating es obligatorio"],
    // min: [1, `El rating mínimo es 1`],
    min: [1, `El rating mínimo es 1, se ha recibido {VALUE}`],
    max: [10, `El rating máximo es 10, se ha recibido {VALUE}`],
  },
  genre: {
    type: String,
    // enum: ["Rock", "Trash", "Pop", "Reggae", "Salsa"],
    enum: {
      values: ["Rock", "Trash", "Pop", "Reggae", "Salsa"],
      message: "{VALUE} no es un género soportado",
    },
  },
  band: { type: mongoose.Schema.Types.ObjectId, ref: "Band" },
});

// discSchema.index({ name: 1, "band.name": 1 }, { unique: true });

//* Convertimos el Esquema en un Modelo:
const Disc = mongoose.model("Disc", discSchema);

module.exports = Disc;
