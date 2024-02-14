const express = require("express");
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
const morgan = require('morgan');
// app.use("/usuario", morgan("dev"));
app.use("/", morgan("dev"));

//* Convertir JSON a Objetos JS
app.use(express.json());

//* CORS
const cors = require('cors');
app.use(cors());

app.use("/", routerRaiz);
app.use("/usuario", routerUsuario);
app.use("/login", authRouter);

module.exports = app;