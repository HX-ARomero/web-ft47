module.exports = {
  getHome: (req, res) => {
    res
      .status(200)
      .json({ message: "GET a la ruta '/'" });
  },
};
