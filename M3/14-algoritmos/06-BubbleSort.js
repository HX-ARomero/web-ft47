function bubbleSort(array) {
  let cambio = true;
  let pasos = 0;
  while (cambio) {
    cambio = false;
    for (let i = 0; i < array.length - 1; i++) {
      pasos++;
      if (array[i] > array[i + 1]) {
        let aux = array[i];
        array[i] = array[i + 1];
        array[i + 1] = aux;
        cambio = true;
      }
    }
  }
  console.log("pasos: " + pasos);
  return array;
}

console.log(bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
