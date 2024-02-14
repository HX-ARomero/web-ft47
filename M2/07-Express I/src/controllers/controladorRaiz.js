const controladorRaiz = (req, res) => {
  // console.log(req);
  // console.log(res);
  console.log(req.params); //* { id:..., name:...}
  const { identificador, name } = req.params;
  res.json({ identificador, name });
};

module.exports = controladorRaiz;