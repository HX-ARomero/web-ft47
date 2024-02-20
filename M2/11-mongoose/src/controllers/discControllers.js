const {
  getDiscsService,
  postDiscService,
  getDiscsByNameService,
  deleteDiscService,
  putDiscService,
} = require("../services/discServices.js");
const discValidator = require("../utils/helpers/discValidator.js");

module.exports = {
  getDiscsController: async (req, res) => {
    try {
      const discs = await getDiscsService();
      res.status(200).json(discs);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  getDiscsByNameController: async (req, res) => {
    try {
      const { param } = req.params;
      const discs = await getDiscsByNameService(param);
      res.status(200).json(discs);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  postDiscController: async (req, res) => {
    try {
      const { name, released, rating, genre, band } = req.body;

      // Validar campos:
      // const errors = discValidator({ name, released, rating, genre, band });
      // if(errors.message) return res.status(400).json(errors);

      // Si pasa todas las validaciones, continuar con la lógica de negocio
      const newDisc = await postDiscService({
        name,
        released,
        rating,
        genre,
        band,
      });
      res.status(200).json(newDisc);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  putDiscController: async (req, res) => {
    try {
      const {id} = req.params;
      const updatedDisc = putDiscService(id, req.body);
      res.status(200).json(updatedDisc);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  deleteDiscController: async (req, res) => {
    try {
      const { name } = req.params;
      const disc = await deleteDiscService(name);
      res.status(200).json(disc);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
