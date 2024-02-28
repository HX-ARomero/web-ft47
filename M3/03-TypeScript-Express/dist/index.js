"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
var server_1 = __importDefault(require("./server"));
dotenv.config();
var PORT = process.env.PORT || 3000;
server_1.default.listen(PORT, function () {
    console.log("Server listening on port ".concat(PORT));
});
