# TypeScript II

## Ejercicios

```ts
//? EJERCICIO 1 ----- -----
function saludar(nombre) {
  return `¡Hola, ${nombre}! ¿Cómo estás?`;
}
// Tipado "IMPLÍCITO" en "const"
const mensaje = saludar('Homero');
console.log(mensaje);
// Tipado "EXPLÍCITO" en "const"
const nuevoMensaje: string = saludar('Marge');
console.log(nuevoMensaje);

//? EJERCICIO 2 ----- -----
function suma(num1, num2) {
  return num1 + num2;
}
console.log(suma(5, 3));

//? EJERCICIO 3 ----- -----
function esPar(numero) {
  return numero % 2 === 0;
}
console.log(esPar(4));

//? EJERCICIO 4 ----- -----
function crearUsuario(nombre, edad) {
  if (edad) {
    console.log(`Usuario ${nombre} de ${edad} años de edad `);
  } else {
    console.log(`Usuario ${nombre} de edad no especificada`);
  }
}
crearUsuario('Marge', 35);
crearUsuario('Homero');

//? EJERCICIO 5 ----- -----
function obtenerLongitud(arr) {
  return arr.length;
}
const frutas = ['manzana', 'banana', 'naranja'];
console.log(obtenerLongitud(frutas));

//? EJERCICIO 6 ----- -----
function mostrarInfoPersona(persona) {
  console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
}
// Tipado "IMPLÍCITO" en "const"
const persona1 = { nombre: 'María', edad: 30 };
mostrarInfoPersona(persona1);
```
