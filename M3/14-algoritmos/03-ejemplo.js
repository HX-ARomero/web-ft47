function busquedaBinaria(array, numero) {
  let inicio = 0;
  let fin = array.length - 1;
  let pasos = 0;

  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);
    pasos++;
    if (array[medio] === numero) {
      return { resultado: true, n: array.length, pasos };
    } else if (array[medio] < numero) {
      inicio = medio + 1;
    } else {
      fin = medio - 1;
    }
  }
  return { resultado: false, n: array.length, pasos };
}

function arrayGenerador(n) {
  const newArray = [];
  for (let i = 0; i < n; i++) {
    newArray.push(i);
  }
  return newArray;
}

console.log(busquedaBinaria(arrayGenerador(10), 5));
console.log(busquedaBinaria(arrayGenerador(100), 50));
console.log(busquedaBinaria(arrayGenerador(1000), 500));
console.log(busquedaBinaria(arrayGenerador(10000), 5000));
console.log(busquedaBinaria(arrayGenerador(100000), 50000));
