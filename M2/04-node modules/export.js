//* Desde este archivo deberás exportar
//* Sigue los ejercicios en el orden indicado
//* Deberás utilizar "module.exports" para exportar lo que necesites
//* Importa en el archivo "import.js" y ejecútalo para comprobar que funciona
//* Una vez completados todos los ejercicios puedes crear tus ejemplos 👍
//* Éxitos 💛


//* 01- Exporta e importa solamente "number"
//*     Haz un console.log de "number" en el archivo "import"
// const number = 7;

//* 02- Exporta e importa solamente "character"
//*     Haz un console.log de "character" en el archivo "import"
// const character = "Homero Simpson";

//* 03- Exporta e importa "character" y "sayHi"
//*     En el archivo "import" ejecuta la función "sayHi" pasándole como argumento "character"
// const sayHi = (name) => console.log(`Hola ${name}`);

//* 04- Crea y exporta un array,
//*     donde dentro del array cada elemento es un objeto,
//*     con las propiedades "firstname" y "lastname"
//*     Exporta también la función "sayHi"
//*     En el archivo "import" mapea el array para saludar a cada personaje!!!
//* Prueba de exportar e importar distintas estructuras de datos
//*     teniendo en cuenta en cada caso qué es lo que se envía y lo que se recibe

const suma = (a, b) => a + b;
const mult = (a, b) => a * b;


module.exports = {suma, mult};