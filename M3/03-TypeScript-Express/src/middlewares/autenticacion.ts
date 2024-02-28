import { NextFunction, Request, Response } from "express";

const autenticacion = (req: Request , res: Response, next: NextFunction) => {
  const { token } = req.headers;

  if(token === "Token-Valido") {
    next();
  } else {
    res.status(401).json({ message: "No autorizado"});
  }
};

export default autenticacion;