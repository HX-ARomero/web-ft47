const express = require("express");
const routerRaiz = express.Router();
const controladorRaiz = require("../controllers/controladorRaiz");

routerRaiz.get("/", controladorRaiz);

module.exports = routerRaiz;