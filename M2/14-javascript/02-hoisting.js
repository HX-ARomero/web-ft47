//* DECLARAR
// var miVariable;

//* INICIALIZAR
// miVariable = "Valor";

//* REASIGNAR
// miVariable = "OtroValor"

//* DECLARAR E INICIALIZAR
// var otraVariable = "OtroValor";

//* REDECLARANDO
// var miVariable = "NuevoValor";

// console.log(miVariable); //* ReferenceError: miVariable is not defined

//* HOISTING EN VARIABLES
// var miVariable; // undefined
// console.log(miVariable);
// miVariable = "Hola Mundo";

//? Expressons Vs Statements
// 1 + 1; //* expression
// var miVariable = function () {
//   console.log("Hola Mundo");
// }; //* function expression

// if (true) {
//   console.log("Hola Mundo");
// } //* statement
// function saludo() {
//   console.log("Hola Mundo");
// } //* function statement

//* HOISTING DE FUNCION
// function saludo() {
//   console.log("Hola Mundo");
// }
// saludo();

// var saludo;
// saludo(); //* saludo
// saludo = function () {
//   console.log("Hola Mundo");
// }; //* function expression

// let hola = "Hola"; //* EXPRESSION

//! hola = "Hola"; //* EXPRESSION
