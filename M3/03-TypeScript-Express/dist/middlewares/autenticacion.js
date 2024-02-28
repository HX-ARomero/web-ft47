"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var autenticacion = function (req, res, next) {
    var token = req.headers.token;
    if (token === "Token-Valido") {
        next();
    }
    else {
        res.status(401).json({ message: "No autorizado" });
    }
};
exports.default = autenticacion;
