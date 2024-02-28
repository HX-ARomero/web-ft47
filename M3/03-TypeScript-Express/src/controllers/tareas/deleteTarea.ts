import { Request, Response } from "express";
import { tareas } from "../../utils/tareas";

export default (req: Request<{id: string}>, res: Response): void => {
  const tareaId = req.params.id;
  //* tareas = [ {..}, {..}, ... ]
  const indice: number = tareas.findIndex(
    tarea => tarea.id === tareaId
  );
  //* Si encuentra => entre 0 y Infinity
  //* Si no encuentra la tarea => -1
  if(indice === -1) {
    res.status(404).json({message: `No se encontró tarea con el id: ${tareaId}`});
    return;
  }
  const tareaEliminada = tareas.splice(indice, 1)[0]; //* [ {..} ][0] => {..}
  //* splice(2, 1) [ 0, 1, 3] = [ 2 ]
  res.json(tareaEliminada);
};