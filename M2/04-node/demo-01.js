//* let module.exports = {}

const nombre = "Homero";
const apellido = "Simpson";
const edad = 45;
const saludar = function(nombre) {console.log(`Hola ${nombre}`)};

module.exports = { nombre, apellido, saludar };

// console.log(module.exports);
//* { nombre: 'Homero', saludar: [Function: saludar] }