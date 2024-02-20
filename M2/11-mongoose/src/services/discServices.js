// const allDiscs = require("../utils/allDiscs.js");
const Disc = require("../models/Disc.js");

module.exports = {
  getDiscsService: async () => {
    const allDiscs = await Disc.find().populate("band").lean();
    return allDiscs;
  },
  getDiscsByNameService: async (param) => {
    const disc = await Disc.find(
      // { name: param }, "name released rating", { limit: 1 }
      { name: { $regex: ".*" + param + "*.", $options: "i" } },
      "name released rating",
      { limit: 2 }
    );
    return disc;
  },
  getDiscsByIdService: async (param) => {
    const disc = await Disc.findById(param, "name released rating");
    return disc;
  },
  postDiscService: async ({ name, released, rating, genre, band }) => {
    // Crear nueva instancia del modelo Disc con los datos recibidos:
    const newDisc = new Disc({
      name,
      released,
      rating,
      genre,
      band,
    });
    // Guardar el nuevo disco en la base de datos:
    const savedDisc = await newDisc.save();
    return savedDisc;
  },
  deleteDiscService: async (name) => {
    const disc = await Disc.deleteOne({ name: name });
    // const disc = await Disc.findByIdAndDelete(id);
    return disc;
  },
  putDiscService: async (id, disc) => {
    const updatedDisc = await Disc.findByIdAndUpdate(id, disc, { new: true });
    return updatedDisc;
  },
};
