function FindWordStartingWith (book, query) {
  // Your code here:
  const text = book.text.toLowerCase();
  query = query.toLowerCase();

  const results = [];

  for (let i = 0; i < text.length - (query.length - 1); i++) {
    console.log(text[i]);
    if(text[i - 1] === " " || i === 0) {
      for (let j = 0; j < query.length; j++) {
        if(query[j] !== text[i + j]) break;
        if(j === query.length - 1) results.push(i);
      }
    }
  }
  return results;
}
//* Complejidad temporal: O(n*m)

const book = {
  id: 1,
  text: 'Erase una vez una luna'
}
console.log(FindWordStartingWith(book, "un")); //* [ 6, 14 ]
module.exports = FindWordStartingWith
