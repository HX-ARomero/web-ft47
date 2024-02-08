const { calcularTotal, calcularDesdeBD } = require("../index.js");

// describe("Función calcularTotal", () => {
//   it("Calcula el total", () => {
//     const items = [
//       {name:"a", price:10, quantity: 2},
//       {name:"b", price:5, quantity: 3},
//     ];
//     expect(calcularTotal(items)).toBe(35);
//   })
// });

jest.mock("../factura.js");
const obteneItemsDeBD = require("../factura.js");

it("Obtener total desde BD", () => {
  obteneItemsDeBD.mockReturnValue([
    {name:"a", price:10, quantity: 2},
    {name:"b", price:5, quantity: 3}
  ]);
  const total = calcularDesdeBD();
  expect(total).toBe(35);
})