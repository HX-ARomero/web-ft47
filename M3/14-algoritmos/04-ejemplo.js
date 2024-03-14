function busquedaSuma(array, numero) {
  let pasos = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      pasos++;
      if(array[i] + array[j] === numero) {
        return { resultado: true, n: array.length, pasos };
      }
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

console.log(busquedaSuma(arrayGenerador(10), 100)); //* 10^2 = 100
console.log(busquedaSuma(arrayGenerador(100), 1000)); //* 100^2 = 10000
console.log(busquedaSuma(arrayGenerador(1000), 10000));
console.log(busquedaSuma(arrayGenerador(10000), 100000));
// console.log(busquedaSuma(arrayGenerador(100000), 1000000));

//* [ 0, 1, 2, 3 ] 10