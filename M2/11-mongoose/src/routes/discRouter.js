const { Router } = require("express");
const {
  getDiscsController,
  postDiscController,
  putDiscController,
  deleteDiscController,
  getDiscsByNameController,
} = require("../controllers/discControllers.js");
const discRouter = Router();

discRouter.get("/", getDiscsController);
discRouter.get("/:param", getDiscsByNameController);
discRouter.post("/", postDiscController);
discRouter.put("/:id", putDiscController);
discRouter.delete("/:name", deleteDiscController);

module.exports = discRouter;
