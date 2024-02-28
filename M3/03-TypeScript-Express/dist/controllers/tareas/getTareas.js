"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tareas_1 = require("../../utils/tareas");
exports.default = (function (req, res) {
    res.json(tareas_1.tareas);
});
