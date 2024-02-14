//* CRUD

let usuarios = [];

const postUsuario = (req, res) => {
  //* req.body = { usuario, contraseña }
  const { usuario, contraseña } = req.body;
  if(usuario && contraseña) {
    if(typeof usuario === "string") {
      usuarios.push({ usuario, contraseña })
    } else {
      return res.status(400).json({ message: "Usuario debe ser un string!!!"});
    }
  } else {
    return res.status(400).json({ message: "Faltan datos!!!"});
  }
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