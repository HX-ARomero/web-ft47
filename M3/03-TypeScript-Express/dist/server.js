"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var tareaRouter_1 = __importDefault(require("./routes/tareaRouter"));
var app = express();
app.use(express.json());
app.use("/tareas", tareaRouter_1.default);
exports.default = app;
