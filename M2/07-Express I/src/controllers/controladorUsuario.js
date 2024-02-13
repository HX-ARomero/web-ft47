//* CRUD

let usuarios = [];

const postUsuario = (req, res) => {
  usuarios.push({ id:1, name:"Homero" });
  res.send(usuarios);
};

const getUsuario = (req, res) => {
  res.send("GET a la ruta '/usuario'");
};

const putUsuario = (req, res) => {
  res.send("PUT a la ruta '/usuario'");
};

const deleteUsuario = (req, res) => {
  usuarios = [];
  res.send(usuarios);
};

module.exports = {
  postUsuario, getUsuario, putUsuario, deleteUsuario
}