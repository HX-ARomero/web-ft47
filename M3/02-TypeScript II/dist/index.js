"use strict";
function saludar(nombre) {
    return "\u00A1Hola, ".concat(nombre, "! \u00BFC\u00F3mo est\u00E1s?");
}
var mensaje = saludar('Homero');
console.log(mensaje);
var nuevoMensaje = saludar('Marge');
console.log(nuevoMensaje);
function suma(num1, num2) {
    return num1 + num2;
}
console.log(suma(5, 3));
function esPar(numero) {
    return numero % 2 === 0;
}
console.log(esPar(4));
function crearUsuario(nombre, edad) {
    if (edad) {
        console.log("Usuario ".concat(nombre, " de ").concat(edad, " a\u00F1os de edad "));
    }
    else {
        console.log("Usuario ".concat(nombre, " de edad no especificada"));
    }
}
crearUsuario('Marge', 35);
crearUsuario('Homero');
function obtenerLongitud(arr) {
    return arr.length;
}
var frutas = ['manzana', 'banana', 'naranja'];
console.log(obtenerLongitud(frutas));
function mostrarInfoPersona(persona) {
    console.log("Nombre: ".concat(persona.nombre, ", Edad: ").concat(persona.edad));
}
var persona1 = { nombre: 'María', edad: 30 };
mostrarInfoPersona(persona1);
var THobbiesPersona;
(function (THobbiesPersona) {
    THobbiesPersona["AJEDREZ"] = "Ajedrez";
    THobbiesPersona["CODEAR"] = "Codear";
    THobbiesPersona["FOOTBALL"] = "Football";
    THobbiesPersona["MIRARTV"] = "Mirar Tele";
    THobbiesPersona["DORMIR"] = "Dormir en el trabajo";
})(THobbiesPersona || (THobbiesPersona = {}));
var homero = {
    id: 1,
    nombre: 'Homero',
    hobbies: [
        THobbiesPersona.FOOTBALL,
        THobbiesPersona.MIRARTV,
        THobbiesPersona.DORMIR,
    ],
    contacto: {
        email: 'homero@gmail.com',
        celular: 123456789,
    },
};
console.log(homero);
var contactosDeLisa = {
    email: "lisa@gmail.com",
    celular: null,
    slack: "Lisa FT47"
};
var lisa = {
    id: 22,
    nombre: 'Lisa',
    hobbies: [
        THobbiesPersona.AJEDREZ,
        THobbiesPersona.CODEAR
    ],
    contacto: contactosDeLisa,
    carrera: "Full Stack",
    modulo: 3
};
console.log(homero);
