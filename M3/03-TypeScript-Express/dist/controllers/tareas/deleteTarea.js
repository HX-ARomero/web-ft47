"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tareas_1 = require("../../utils/tareas");
exports.default = (function (req, res) {
    var tareaId = req.params.id;
    var indice = tareas_1.tareas.findIndex(function (tarea) { return tarea.id === tareaId; });
    if (indice === -1) {
        res.status(404).json({ message: "No se encontr\u00F3 tarea con el id: ".concat(tareaId) });
        return;
    }
    var tareaEliminada = tareas_1.tareas.splice(indice, 1)[0];
    res.json(tareaEliminada);
});
