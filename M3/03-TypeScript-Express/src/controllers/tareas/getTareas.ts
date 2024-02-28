import { Request, Response } from "express";
import { tareas } from "../../utils/tareas";

export default (req: Request, res: Response): void => {
  res.json(tareas);
};