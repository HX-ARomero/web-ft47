"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTarea = exports.putTarea = exports.getTareas = exports.postTarea = void 0;
var postTarea_1 = require("./tareas/postTarea");
Object.defineProperty(exports, "postTarea", { enumerable: true, get: function () { return __importDefault(postTarea_1).default; } });
var getTareas_1 = require("./tareas/getTareas");
Object.defineProperty(exports, "getTareas", { enumerable: true, get: function () { return __importDefault(getTareas_1).default; } });
var putTarea_1 = require("./tareas/putTarea");
Object.defineProperty(exports, "putTarea", { enumerable: true, get: function () { return __importDefault(putTarea_1).default; } });
var deleteTarea_1 = require("./tareas/deleteTarea");
Object.defineProperty(exports, "deleteTarea", { enumerable: true, get: function () { return __importDefault(deleteTarea_1).default; } });
