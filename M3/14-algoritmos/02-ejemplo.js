function busquedaNumero(array, num) {
  let pasos = 0;
  for (let i = 0; i < array.length; i++) {
    pasos++;
    if (array[i] === num) {
      return { resultado: true, n: array.length, pasos };
    }
  }
  return { resultado: false, n: array.length, pasos };
}

console.log(busquedaNumero([1], 6));
console.log(busquedaNumero([1, 2], 6));
console.log(busquedaNumero([1, 2, 3], 6));
console.log(busquedaNumero([1, 2, 3, 4], 6));
console.log(busquedaNumero([1, 2, 3, 4, 5], 6));
