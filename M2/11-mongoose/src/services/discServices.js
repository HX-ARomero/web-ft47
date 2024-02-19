const allDiscs = require("../utils/allDiscs.js");

module.exports = {
  getDiscsService: async () => {
    return await allDiscs;
  },
};
