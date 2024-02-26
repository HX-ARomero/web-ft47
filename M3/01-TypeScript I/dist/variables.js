"use strict";
//* EXPORTAR
Object.defineProperty(exports, "__esModule", { value: true });
exports.num2 = exports.num1 = void 0;
//* 1°
const num1 = 3;
exports.num1 = num1;
const num2 = 4;
exports.num2 = num2;
//* 2°
// export const num1: number = 3;
// export const num2: number = 4;
//* 3°
// export {
//   num1: number = 3,
//   num2: number = 4
// }
//* export default => UNA SOLA VEZ POR MÓDULO
function suma(a, b) {
    return a + b;
}
exports.default = suma;
