const { Router } = require("express");
const {
  getDiscsController,
  postDiscController,
  putDiscController,
  deleteDiscController,
} = require("../controllers/discControllers.js");
const discRouter = Router();

discRouter.get("/", getDiscsController);
discRouter.post("/", postDiscController);
discRouter.put("/", putDiscController);
discRouter.delete("/", deleteDiscController);

module.exports = discRouter;