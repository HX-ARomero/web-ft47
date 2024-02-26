//* IMPORTAR

//* { num1: 3, num2: 4 }
import { num1, num2 } from "./variables";

//* function() {-----}
import suma from "./variables"


const result: number = suma(num1, num2);
console.log(result);

const formatResult: string = result.toString();
console.log(formatResult);

// const number = 7;

//* DATOS PRIMITIVOS EN JS: string, number, boolean, undefined, null (bigInt - symbol)

//* NUMBER

const valorIngresado: string = "1234";

const passwordGuardado: number = 1234;
const passwordIngresado: number = Number(valorIngresado);
// const passwordIngresado: number = NaN;
//? Datos tipo number: número, NaN, +Infinity, -Infinity

if(passwordGuardado === passwordIngresado) {
  // Dar Acceso
}

//* STRING

//? Comillas Dobles:
const apellido: string = "Simpson";

//? Comillas Simples:
const homero: string = 'Homero';

//? Template Strings:
const lisa: string = `Lisa ${apellido}`;

// const bart: string = new String("Bart");

const moe = 1234;

console.log(`Yo soy ${moe}`); // "Yo soy " + 1234 => "Yo soy 1234"
console.log(apellido[40]);
apellido[40]
  ? console.log(apellido[40])
  : console.log("No ha sido definido")

//* BOOLEANOS
let access: boolean;
// console.log(access); // access = undefined;

access = 9 && true;
//*    true   ->true
console.log(access);  // access = true;

// access = true && 9;  // access = 9;
access = false && 9; // access = false
//* Tabla de Verdad
//* AND
//* v && v => v
//?      ^
//* v && f => f
//?      ^
//* f && v => f
//? ^
//* f && f => f
//? ^

//* Valores Truthy => Todo valor que en contexto Booleano dan "true"
//*   Valores Truthy: Todo lo que NO es Falsy
//* Valores Falsy => Todo valor que en contexto Booleano dan "false"
//*   Valores Falsy: null, undefined, 0, "", false

//* ANY
let miVariable: any = null;
miVariable = "Nuevo Valor";
miVariable = 1234;

let otraVariable;
// otraVariable.

//* Declaración de variables con tipos
//* Infiriendo automáticamente el tipo de dato: 5
// const name = 5;
const name: number = 5;
// console.log(name.toUpperCase());

// const personaje = "Homero"; // Tipo de dato: "Homero"
const personaje: string = "Homero"; // Tipo de dato: string
console.log(Number(personaje).toExponential());
