const dbConfig = require("./src/config/dbConfig.js");
const server = require("./src/server.js");

PORT = 3000;

dbConfig()
  .then(() => {
    server.listen(
      PORT,
      () => console.log(`Server listening on http://localhost:${PORT}`)
    );
  })
  .catch(error => console.log(error));
