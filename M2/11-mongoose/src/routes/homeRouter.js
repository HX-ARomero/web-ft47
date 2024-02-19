const { Router } = require("express");
const { getHome } = require("../controllers/homeControllers.js");
const homeRouter = Router();

homeRouter.get("/", getHome);

module.exports = homeRouter;