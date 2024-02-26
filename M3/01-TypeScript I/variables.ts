//* EXPORTAR

//* 1°
const num1: number = 3;
const num2: number = 4;
export {
  num1, num2
}

//* 2°
// export const num1: number = 3;
// export const num2: number = 4;

//* 3°
// export {
//   num1: number = 3,
//   num2: number = 4
// }

//* export default => UNA SOLA VEZ POR MÓDULO
export default function suma(a: number, b: number) {
  return a + b;
}
