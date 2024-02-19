const { getDiscsService, postDiscService } = require("../services/discServices.js");
const discValidator = require("../utils/helpers/discValidator.js");

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
      //* Mediante librería: https://www.npmjs.com/package/joi
      //* Sin librería: Las siguientes líneas realizan la validación según la función en:
      //*    "./src/utils/helpers/discValidator.js"
      // const errors = discValidator({ name, released, rating, genre, band });
      // if(errors.message) return res.send(400).json(errors);

      const createdDisc = await postDiscService({ name, released, rating, genre, band });
      res.status(200).json(createdDisc);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  putDiscController: (req, res) => {},
  deleteDiscController: (req, res) => {},
};
