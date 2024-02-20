const server = require("./src/server.js");
const dbConfig = require("./src/config/dbConfig.js");
const PORT = 3000;

dbConfig()
  .then(() => {
    server.listen(PORT, () =>
      console.log(`Server listening on http://localhost:${PORT}`)
    );
  })
  .catch(error => console.log(error));
