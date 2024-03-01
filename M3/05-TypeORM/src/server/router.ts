import { postPlatformController } from "./controllers";

const {Router} = require("express");
const {
  getController,
  postController,
  putController,
  deleteController,
} = require("./controllers");
const router = Router();

router.get("/", getController);
router.post("/", postController);
router.put("/", putController);
router.delete("/", deleteController);

router.post("/platforms", postPlatformController);

module.exports = router;
