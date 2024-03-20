function MaxValue (shares) {
  // Your code here:
  let maxProfit = shares[1] - shares[0];
  let minValue = shares[0];

  for (let i = 1; i < shares.length; i++) {
    const sellPrice = shares[i];
    const actualProfit = sellPrice - minValue;
    maxProfit = Math.max(actualProfit, maxProfit);
    minValue = Math.min(sellPrice, minValue);
  }
  return maxProfit;
}
//* Complejidad Temporal: O(n)

// function MaxValue (shares) {
//   // Your code here:
//   console.log(shares);
//   //*                                 ^
//   //* minValue = 1
//   //* maxProfit = 9

//   let maxProfit = -Infinity;
//   for (let i = 0; i < shares.length; i++) {
//     for (let j = i + 1; j < shares.length; j++) {
//       const buyPrice = shares[i];
//       const sellPrice = shares[j];
//       const actualProfit = sellPrice - buyPrice;
//       maxProfit = actualProfit > maxProfit
//         ? actualProfit
//         : maxProfit
//     }
//   }
//   return maxProfit;
// }
// //* Complejidad Temporal: O(n^2)

console.log(MaxValue([4, 3, 2, 5, 11, 1])); // 9
// console.log(MaxValue([15, 4, 3, 2, 5, 11, 1])); // 9

//* 1. Recorrer shares
//* 2. Comparar con todos los siguientes
//* 3. Guardar la mayor ganancia
//* 4. Retornar mayor Ganancia

module.exports = MaxValue
