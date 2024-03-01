const express = require("express");
const app = express();
const router = require("./router");

export const serverInitialize = async (PORT: number) => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  app.use(express.json());
  app.use(router);
};
