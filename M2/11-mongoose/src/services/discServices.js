// const allDiscs = require("../utils/allDiscs.js");

const Disc = require("../models/Disc.js");

//! CONSULTA
module.exports = {
  getDiscsService: async () => {
    const allDiscs = await Disc.find();
    return allDiscs;
  },
  postDiscService: async ({ name, released, rating, genre, band }) => {
    const newDisc = new Disc({
      name, released, rating, genre, band
    });
    const savedDisc = await newDisc.save();
    return savedDisc;
  }
};
