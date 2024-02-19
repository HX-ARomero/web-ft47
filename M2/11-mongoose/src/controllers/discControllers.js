const { getDiscsService } = require("../services/discServices.js");

module.exports = {
  getDiscsController: async (req, res) => {
    const discs = await getDiscsService();
    res.status(200).json(discs);
  },
  postDiscController: (req, res) => {},
  putDiscController: (req, res) => {},
  deleteDiscController: (req, res) => {},
};
