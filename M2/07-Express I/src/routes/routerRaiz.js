const express = require("express");
const routerRaiz = express.Router();
const controladorRaiz = require("../controllers/controladorRaiz");

routerRaiz.get("/:identificador/:name", controladorRaiz);

module.exports = routerRaiz;