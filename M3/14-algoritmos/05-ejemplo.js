function generarSubsets(chars) {
  let pasos = 0;

  function generateHelper(subset, index) {
    pasos++;
    if (index === chars.length) {
      console.log(subset);
      return;
    }
    generateHelper(subset + chars[index], index + 1);
    generateHelper(subset, index + 1);
  }

  generateHelper("", 0);
  console.log("Pasos:", pasos);
}

generarSubsets("12");
generarSubsets("123");
generarSubsets("1234");
generarSubsets("12345");
generarSubsets("123456");
