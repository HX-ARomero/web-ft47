import { Request, Response } from "express";
import { tareas } from "../../utils/tareas";
import ITarea from "../../interfaces/ITarea";

export default (req: Request<{id: string}, Partial<ITarea>>, res: Response): void => {
  const tareaId = req.params.id;
  const { actividad, prioridad, completada } = req.body;

  //* Verificamos que exista al menos un valor para modificar
  if(!actividad && !prioridad && completada === undefined) {
    //* completada = true | false
    res.status(400).json({
      message: "Debe enviar al menos un valor"
    });
    return;
  }

  //* Buscamos tarea a modificar
  const tareaEncontrada: ITarea | undefined = tareas.find(
    tarea => tarea.id === tareaId
  );

  //* No encontró la tarea
  if(!tareaEncontrada) {
    res.status(400).json({
      message: `No hay tarea con el id: ${tareaId}`
    });
    return;
  }

  if(actividad) tareaEncontrada.actividad = actividad;
  if(prioridad) tareaEncontrada.prioridad = prioridad;
  if(completada !== undefined) tareaEncontrada.completada = completada;

  //* Retornar el objeto modificado
  res.json(tareaEncontrada);
};