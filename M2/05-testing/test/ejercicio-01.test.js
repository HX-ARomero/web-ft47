const { suma, mult } = require("../ejercicios/ejercicio-01.js");

xdescribe("Función suma", () => {
  it("Retorna 5 cuando recibe 2 y 3", () => {
    expect(suma(2, 3)).toBe(5);
  });
  it("Retorna 6 cuando recibe 2 y 4", () => {
    expect(suma(2, 4)).toBe(6);
  });
  it("Retorna -3 cuando recibe 2 y 5", () => {
    expect(suma(2, -5)).toBe(-3);
  });
});

describe("Función mult", () => {
  it("Retorna 6 cuando recibe 2 y 3", () => {
    expect(mult(2, 3)).toBe(6);
  });
  it("Retorna 6 cuando recibe 2 y 4", () => {
    expect(mult(2, 4)).toBe(8);
  });
  it("Retorna -3 cuando recibe 2 y 5", () => {
    expect(mult(2, -5)).toBe(-10);
  });
});

//* x delante => SKIP
//* describe.only ó it.only => corramente ESE