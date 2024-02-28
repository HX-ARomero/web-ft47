"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var autenticacion_1 = __importDefault(require("../middlewares/autenticacion"));
var controllers_1 = require("../controllers");
var tareaRouter = (0, express_1.Router)();
tareaRouter.post("/", controllers_1.postTarea);
tareaRouter.get("/", autenticacion_1.default, controllers_1.getTareas);
tareaRouter.put("/:id", controllers_1.putTarea);
tareaRouter.delete("/:id", controllers_1.deleteTarea);
exports.default = tareaRouter;
