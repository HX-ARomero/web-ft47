const authService = require("../services/authService.js");

//* http://localhost:3000/login?usuario=Homero&contraseña=1234
//* http://localhost:3000/login // JSON = { "nombre": ..., "contraseña": ... }
const authController = (req, res) => {
  console.log(req.body);
  //* { usuario: "Homero", contraseña: "1234" }
  const { usuario, contraseña } = req.body;

  if(authService.verificarCredenciales(usuario, contraseña)) {
    const token = authService.generarToken(usuario);
    res.status(200).json({ message: "Login exitoso", token });
  } else {
    res.status(401).json({ message: "Credenciales incorrectas "});
  }
};

module.exports = authController;