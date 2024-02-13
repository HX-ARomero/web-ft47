const express = require("express");
const { postUsuario, getUsuario, putUsuario, deleteUsuario } = require("../controllers/controladorUsuario");
const routerUsuario = express.Router();

routerUsuario.post("/", postUsuario);
routerUsuario.get("/", getUsuario);
routerUsuario.put("/", putUsuario);
routerUsuario.delete("/", deleteUsuario);

module.exports = routerUsuario;