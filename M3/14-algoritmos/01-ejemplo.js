function saludar(nombre) {
  let pasos = 0;
  pasos++;
  return { resultado: `Hola ${nombre}`, n: nombre.split(" ").length, pasos };
}

console.log(saludar("Homero"));
console.log(saludar("Homero, Marge"));
console.log(saludar("Homero, Marge, Lisa"));
console.log(saludar("Homero, Marge, Lisa y Bart"));