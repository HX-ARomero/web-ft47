const { getDiscsService, postDiscService } = require("../services/discServices.js");

module.exports = {
  getDiscsController: async (req, res) => {
    try {
      const discs = await getDiscsService();
      res.status(200).json(discs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  postDiscController: async (req, res) => {
    try {
      const { name, released, rating, genre, band } = req.body;
      //* VALIDAR DATOS
      // https://www.npmjs.com/package/joi
      const createdDisc = await postDiscService({ name, released, rating, genre, band });
      res.status(200).json(createdDisc);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  putDiscController: (req, res) => {},
  deleteDiscController: (req, res) => {},
};
