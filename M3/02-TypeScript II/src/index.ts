//? EJERCICIO 1 ----- -----
function saludar(nombre: string): string {
  return `¡Hola, ${nombre}! ¿Cómo estás?`;
}

// Tipado "IMPLÍCITO" en "const"
const mensaje = saludar('Homero');
console.log(mensaje);

// Tipado "EXPLÍCITO" en "const"
const nuevoMensaje: string = saludar('Marge');
console.log(nuevoMensaje);

//? EJERCICIO 2 ----- -----
function suma(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(suma(5, 3));

//? EJERCICIO 3 ----- -----
function esPar(numero: number): boolean {
  return numero % 2 === 0;
}
console.log(esPar(4));

//? EJERCICIO 4 ----- -----
function crearUsuario(nombre: string, edad?: number): void {
  if (edad) {
    console.log(`Usuario ${nombre} de ${edad} años de edad `);
  } else {
    console.log(`Usuario ${nombre} de edad no especificada`);
  }
}
crearUsuario('Marge', 35);
crearUsuario('Homero');

//? EJERCICIO 5 ----- -----
function obtenerLongitud(arr: string[]): number {
  return arr.length;
}
const frutas = ['manzana', 'banana', 'naranja'];
console.log(obtenerLongitud(frutas));

//? EJERCICIO 6 ----- -----
function mostrarInfoPersona(persona: { nombre: string; edad: number }): void {
  console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
}
// Tipado "IMPLÍCITO" en "const"
const persona1 = { nombre: 'María', edad: 30 };
mostrarInfoPersona(persona1);

//* TIPO PERSONALIZADO ----- ----- ----- -----
type TContactoPersona = {
  email: string;
  celular: number | null;
};
//* Extender Tipo Personalizado
type TContactoEstudiante = TContactoPersona & {
  slack: string
}

//* Tipo Personalizado TCarrera:
type TCarrera = "Full Stack" | "Data Science" | "Data Analitics";

enum THobbiesPersona {
  AJEDREZ = 'Ajedrez',
  CODEAR = 'Codear',
  FOOTBALL = 'Football',
  MIRARTV = 'Mirar Tele',
  DORMIR = 'Dormir en el trabajo',
}

//* INTERFACES ----- ----- ----- -----
interface IPersona {
  id: number;
  nombre: string;
  hobbies: THobbiesPersona[]; //* [ "palabra1", "palabra2" ] // [string, number, boolean, string]
  contacto: TContactoPersona;
}
//* Crear IEstudiante => Extendiendo a IPersona
interface IEstudiante extends IPersona {
  contacto: TContactoEstudiante
}
interface IEstudiante {
  carrera: TCarrera,
  modulo: number
}

const homero: IPersona = {
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

//* ALIAS
const contactosDeLisa: TContactoEstudiante = {
  email: "lisa@gmail.com",
  celular: null,
  slack: "Lisa FT47"
}

const lisa: IEstudiante = {
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


