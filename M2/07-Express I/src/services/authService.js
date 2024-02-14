const BBDD = {
  usuario: "Homero",
  contraseña: "1234"
};

const authService = {
  verificarCredenciales: (usuario, contraseña) => {
    // Lógica de verificación
    return usuario === BBDD.usuario && contraseña === BBDD.contraseña;
  },
  generarToken: (usuario) => {
    // Genración de Token con librería: jsonwebtoken
    const token = "tokenGenerado";
    return token;
  }
};

module.exports = authService;