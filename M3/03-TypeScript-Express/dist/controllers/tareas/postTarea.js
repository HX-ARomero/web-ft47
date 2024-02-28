"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tareas_1 = require("../../utils/tareas");
exports.default = (function (req, res) {
    var nuevaTarea = req.body;
    tareas_1.tareas.push(nuevaTarea);
    res.status(201).json(nuevaTarea);
});
