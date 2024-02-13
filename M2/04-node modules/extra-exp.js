//* Buen comienzo de semana 💛💛💛
//* Les dejo un Extra-Credit...

const nombre = "Homero";
const apellido = "Simpson";

//* let exports = module.exports;

//* Lo siguiente funciona:
exports.nombre = nombre;
exports.apellido = apellido;

//* Lo siguiente NO funciona:
exports = { nombre, apellido };

//? ¿Por qué ocurre lo anterior?