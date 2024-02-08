const getCharacter = require("../ejercicios/ejercicio-02.js");

describe("Función getCharacte", () => {

  it("Debe ser una función", () => {
    expect(typeof getCharacter).toBe("function");
  })

  it("Retorna objeto con las propiedades firtName y LastName", () => {
    expect(Object.keys(getCharacter())).toEqual(["firstName", "lastName"]);
  });

  it("Retorna objeto con propiedades pasadas", () => {
    expect(getCharacter("Homero", "Simpson")).toEqual({
      firstName: "Homero", lastName: "Simpson"
    });
  });
  it("Retorna objeto con propiedades pasadas", () => {
    expect(getCharacter("Lisa", "Simpson")).toMatchObject({
      firstName: "Lisa", lastName: "Simpson"
    });
  });


});
