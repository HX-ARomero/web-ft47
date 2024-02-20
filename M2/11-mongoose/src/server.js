const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const homeRouter = require("./routes/homeRouter.js");
const discRouter = require("./routes/discRouter.js");
const Band = require("./models/Band.js");
const server = express();

//* Middlewares
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

server.use("/", homeRouter);
server.use("/disc", discRouter);

server.post("/band", async (req, res) => {
  try {
    const newBand = new Band({
      name: "Metallica",
      country: "USA",
    });
    newBand.save();
    res.json(newBand);
  } catch (error) {
    console.log(error);
  }
});

module.exports = server;
