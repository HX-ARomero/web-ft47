const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const homeRouter = require("./routes/homeRouter.js");
const discRouter = require("./routes/discRouter.js");
const server = express();

//* Middlewares
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

server.use("/", homeRouter);
server.use("/disc", discRouter);

module.exports = server;