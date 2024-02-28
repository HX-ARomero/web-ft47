# TypeScript II - Code Review

## Estructura del proyecto

```txt
  fs-project-m3/
  |-- back/
  | |-- src/
  | |-- index.ts
  |-- front/
  |-- .gitignore
```

## Configuración inicial de TypeScript

> Abrimos consola en la carpeta "back"

```bash
# Comprobamos versión instalada
tsc --v

# Debemos tener instalado TypeScript en forma global
npm install -g typescript

# Inicializamos un proyecto en Node JS
npm init -yes

# Generamos el archivo "tsconfig.json
tsc --init
```

### Configuración en archivo "tsconfig.json

```json
{
  "compilerOptions": {
    // Se compilará a la versión ECMAScript 5:
    "target": "ES5",
    // Usará el sistema de módulos CommonJS:
    "module": "commonjs",
    // Archivos de TS a compilar estarán ubicados en la carpeta src:
    "rootDir": "./src",
    // El resultado de la compilación estará en una carpeta dist:
    "outDir": "./dist",
    // Se harán restricciones más rigurosas del código.
    // Lo que implica mayores comprobaciones por parte de TSC:
    "strict": true
  },
  // Se incluirá en la compilación:
  //   todos aquellos archivos dentro de src
  //    y sus directorios internos con extensión .ts:
  "include": ["src/**/*.ts"],
  // Se omite la carpeta de node_modules para la compilación
  "exclude": ["node_modules"]
}
```

## Configuración inicial de ESLint

> Abrimos consola en la carpeta "back"

```bash
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier --save-dev
```

> Creamos ARCHIVO ".eslintrc.js" en la raíz de nuestro back:

```js
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    // Puedes añadir reglas personalizadas aquí
  },
};
```

## Creamos scripts en el "package.json

```json
"scripts": {
  "build": "tsc",
  "start": "node ./dist/index.js",
  "dev": "tsc && node ./dist/index.js",
  "lint": "eslint . --ext .ts"
},
```

## EJERCICIOS

```ts
//* EJERCICIO 1 ----- ----- ----- -----
// Tipar la siguiente función:
const calculaArea = (lado1, lado2) => lado1 * lado2;

console.log(calculaArea(5, 6));

//* EJERCICIO 2 ----- ----- ----- -----
// Crear la función "presentarUsuario" para que retorne lo esperado:
const presentarUsuario = () => {
	// Aquí tu código
};

presentarUsuario('Homero');
// 'Nombre: Homero, Edad: No especificada'
presentarUsuario('Marge', 'Bubbie');
// 'Nombre: Marge, Apellido: Bubbie, Edad: No especificada'
presentarUsuario('Lisa', 'Simpson', '8');
// 'Nombre: Lisa, Apellido: Simpson, Edad: 8'

//* EJERCICIO 3 ----- ----- ----- -----
// Generar el Tipo Personalizado "TPersona":
// Extenderlo para "TEmpleado":
// Aquí tu código:

const persona: TPersona = {
	nombre: 'Marge',
	edad: 35,
};
console.log(persona);

const empleado: TEmpleado = {
	nombre: 'Homero',
	edad: 37,
	puesto: 'Jefe de Seguridad',
	empleadoDelMes: true,
};
console.log(empleado);

//* EJERCICIO 4 ----- ----- ----- -----
// Generar la interfaz "IProducto" y extenderla para "IProductoElectronico" e "IProductoRopa":
// Aquí tu código:

const celularCODIGO: IProductoElectronico = {
	nombre: 'Smartphone',
	precio: 500,
	marca: 'Samsung',
	modelo: 'Galaxy S20',
};

const remeraCODIGO: IProductoRopa = {
	nombre: 'Camiseta',
	precio: 20,
	talla: 'M',
	color: 'Azul',
};

console.log(celularCODIGO);
console.log(remeraCODIGO);

//* EJERCICIO 5 ----- ----- ----- -----
// Crear la Interfaz "ITarea" y a partir de ella la "ITareaParaEntregar":
// Aquí tu código:

const tarea: ITarea = {
	titulo: 'TypeScript II',
	descripcion: 'Configuración y práctica',
	completada: false,
};

const tareaParaEntregar: ITareaParaEntregar = {
	titulo: 'Proyecto Integrador M3',
	completada: false,
	fechaLimite: '2024-03-14',
};

console.log(tarea);
console.log(tareaParaEntregar);
```
