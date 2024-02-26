"use strict";
//* IMPORTAR
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//* { num1: 3, num2: 4 }
const variables_1 = require("./variables");
//* function() {-----}
const variables_2 = __importDefault(require("./variables"));
const result = (0, variables_2.default)(variables_1.num1, variables_1.num2);
console.log(result);
