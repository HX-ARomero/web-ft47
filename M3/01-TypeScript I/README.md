//? JavaScript => Node => Librerías y Frameworks
//* Débilmente Tipado
// let password = "1234";
//* Tipado Dinámico
// password = 5678;

// function suma(a, b) {
//   return a + b;
// }
// console.log(suma(2, { b: 3 }));

//? TypeScript: https://www.typescriptlang.org/docs/
//* Fuertemente Tipado
// let password: string = "1234";
//* Tipado Estático
// password = "5678";

// Ayuda en VSC
// let nombre: string = document.getElementById('InputName').value;
// nombre?.charAt(2);

// function suma(a: number, b: number) {
//   return a + b;
// }
// console.log(suma(2, [{ b: 3 }]));

# Intalar TypeScript de forma Global

- Instalar
```bash
# Instalar en forma Global
npm install -g typescript

# Verificar dependencias globales
npm ls -g --depth-0

# Verificar versión de TS
tsc -v

# Desinstalar TS Global
npm uninstall -g typescript
```
