const express = require("express");
const routerRaiz = require("./routes/routerRaiz");
const routerUsuario = require("./routes/routerUsuario");


//* objeto con todos los métodos de la Clase express
const app = express();

app.use("/", routerRaiz);
app.use("/usuario", routerUsuario);

module.exports = app;