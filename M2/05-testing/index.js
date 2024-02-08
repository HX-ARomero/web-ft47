const obteneItemsDeBD = require("./factura");

function calcularTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    total += item.price * item.quantity
  }
  return total;
}

function calcularDesdeBD() {
  const items = obteneItemsDeBD();
  return calcularTotal(items);
}

module.exports = { calcularTotal, calcularDesdeBD };

/*
item = [
  { name:..., price:10, quantity: 2},
  { name:..., price:20, quantity: 2},
]
*/