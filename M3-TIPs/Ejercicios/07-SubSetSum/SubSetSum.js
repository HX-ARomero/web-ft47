function subsetSum (nums, target) {
  // Your code here:
  const sums = new Set([0]);

  for (const num of nums) {
    const sumsCopy = [...sums];
    for (const sum of sumsCopy) {
      const actualSum = num + sum;
      if(actualSum === target) return true;
      if(actualSum < target) sums.add(actualSum);
    }
  }
  return false;
}
//* Complejidad temporal = O(2^n) NO CAMBIA !!!!

// console.log(subsetSum([1, 2, 3, 4, 5, 6], 999)); //* true
console.log(subsetSum([1,2,10,5,3], 9)); //* true
console.log(subsetSum([1,2,10,5,3], 99)); //* true

module.exports = subsetSum
