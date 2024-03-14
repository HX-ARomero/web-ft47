function merge(left, right) {
  let leftIndex = 0;
  let rightIndex = 0;
  let mergedArray = [];

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  // También agregamos los elementos NO pusheados!!!
  return mergedArray.concat(
    left.slice(leftIndex).concat(right.slice(rightIndex))
  );
}

function mergeSort(array) {
  // Caso Base:
  if (array.length === 1) return array;
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  // Llamado recursivo:
  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
