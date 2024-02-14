//* En este archivo "importamos" lo que enviamos desde el archivo "export.js"

const importado = require("./export");
//* object = { suma, mult }

console.log(importado.suma);