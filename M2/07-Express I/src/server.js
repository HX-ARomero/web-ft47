const cors = require('cors');
const express = require("express");
const morgan = require('morgan');
const { body, validationResult } = require('express-validator');
const routerRaiz = require("./routes/routerRaiz");
const routerUsuario = require("./routes/routerUsuario");
const authRouter = require("./routes/authRouter");

//* objeto con todos los métodos de la Clase express
const app = express();

//* Middlewares
// app.use("/usuario", (req, res, next) => {
//   console.log(`${req.method} a la ruta ${req.url}`);
//   next();
// });

app.use("/", morgan("dev"));

//* Convertir JSON a Objetos JS
app.use(express.json());

//* CORS
app.use(cors());

//* Middleware de Autenticación a "/usuarios"
app.use("/usuario", (req, res, next) => {
  const { token } = req.body;
  if(token === "tokenGenerado") {
    next();
  } else {
    res.status(401).json({ message: "Acceso denegado. Token inválido!!!"})
  }
});

//* Express-validator
const validarInicioSesion = [
	body("email")
		.isEmail()
		.withMessage("Debe proporcionar un correo electrónico válido"),
	body("contraseña")
		.isLength({ min: 5 })
		.withMessage("La contraseña debe tener al menos 5 caracteres"),
];
  
// Ruta para Iniciar Sesión
app.post("/iniciar-sesion", validarInicioSesion, (req, res) => {
	// Verificar si hay errores de validación
	const errores = validationResult(req);
	if (!errores.isEmpty()) {
		return res.status(400).json({ errores: errores.array() });
	}
	
	// Procesar la solicitud de inicio de sesión si no hay errores
	res.json({ mensaje: "Datos en el formato esperado" });
});

app.use("/", routerRaiz);
app.use("/usuario", routerUsuario);
app.use("/login", authRouter);

module.exports = app;