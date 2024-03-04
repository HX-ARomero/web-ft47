import { postCharacterController, postGenreController, postPlatformController } from "./controllers";

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
router.post("/genres", postGenreController);
router.post("/characters", postCharacterController);

module.exports = router;
