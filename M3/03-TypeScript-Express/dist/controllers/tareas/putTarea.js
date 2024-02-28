"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tareas_1 = require("../../utils/tareas");
exports.default = (function (req, res) {
    var tareaId = req.params.id;
    var _a = req.body, actividad = _a.actividad, prioridad = _a.prioridad, completada = _a.completada;
    if (!actividad && !prioridad && completada === undefined) {
        res.status(400).json({
            message: "Debe enviar al menos un valor"
        });
        return;
    }
    var tareaEncontrada = tareas_1.tareas.find(function (tarea) { return tarea.id === tareaId; });
    if (!tareaEncontrada) {
        res.status(400).json({
            message: "No hay tarea con el id: ".concat(tareaId)
        });
        return;
    }
    if (actividad)
        tareaEncontrada.actividad = actividad;
    if (prioridad)
        tareaEncontrada.prioridad = prioridad;
    if (completada !== undefined)
        tareaEncontrada.completada = completada;
    res.json(tareaEncontrada);
});
