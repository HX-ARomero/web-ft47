function FindNeedle (haystack, needle) {
  // Your code here:
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    const sliced = haystack.slice(i, needle.length + i);
    if(sliced === needle) return i;
  }
  return - 1;
}
//* Complejidad Temporal O(m*n)

// function FindNeedle (haystack, needle) {
//   // Your code here:
//   console.log(haystack);
//   //*                            ^hI = 0 + 0
//   console.log(needle);
//   //*                    ^nI = 0

//   for (let haystackIndex = 0; haystackIndex < haystack.length - needle.length + 1; haystackIndex++) {
//     console.log(haystack[haystackIndex]);
//     for (let needleIndex = 0; needleIndex < needle.length; needleIndex++) {
//       console.log(needle[needleIndex]);
//       if(haystack[haystackIndex + needleIndex] === needle[needleIndex]) {
//         console.log("match");
//         //* => needleIndex => needleIndex (4) === needle.length - 1 (5 - 1) 
//         if(needleIndex === needle.length - 1) return haystackIndex;
//       } else {
//         break
//       }
//     }
//   }
//   return - 1;
// }
//* Complejidad temporal O(n*m)

console.log(FindNeedle('react-redux', 'redux')); // (6)
console.log(FindNeedle('Hola como estas, pinky', 'puntual')); // (-1)
console.log(FindNeedle('rereredux', 'reredux')); // (2)

//* 1- Recorrer (for) haystack
//* 2- Recorrer (for) needle
//* 3- Comparar si hay match
//*    Si hay math?
//*    Si no hay match => break
//* 4- Si llegamos al final del needle sin un break => retornar índice
//* 5- Si recorremos todo el haystack sin encontrar al needle dentro => retornar - 1

//? Slice
module.exports = FindNeedle


/* Chat GPT
function computeLPSArray(needle) {
  let lps = Array(needle.length).fill(0);
  let len = 0; 
  let i = 1;

  while (i < needle.length) {
    if (needle[i] === needle[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = lps[len - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }

  return lps;
}

function FindNeedle(haystack, needle) {
  let lps = computeLPSArray(needle);
  let i = 0; 
  let j = 0; 

  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
    }

    if (j === needle.length) {
      return i - j;
    } else if (i < haystack.length && haystack[i] !== needle[j]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return -1;
}
*/