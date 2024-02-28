import { Request, Response } from "express";
import { tareas } from "../../utils/tareas";
import ITarea from "../../interfaces/ITarea";


export default (req: Request<ITarea>, res: Response): void => {
  const nuevaTarea: ITarea = req.body;
  tareas.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
};