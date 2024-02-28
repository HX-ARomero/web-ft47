import { Router, Request, Response } from "express";
import autenticacion from "../middlewares/autenticacion";
import { deleteTarea, getTareas, postTarea, putTarea } from "../controllers";
const tareaRouter = Router();

tareaRouter.post("/", postTarea);

tareaRouter.get("/", autenticacion, getTareas);

tareaRouter.put("/:id", putTarea);

tareaRouter.delete("/:id", deleteTarea);

export default tareaRouter;