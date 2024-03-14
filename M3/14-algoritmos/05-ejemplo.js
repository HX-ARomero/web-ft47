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

generarSubsets("12"); //* 2^1 = 2
generarSubsets("123"); //* 2^2 = 4
generarSubsets("1234"); //* 2^3 = 8
generarSubsets("12345");//* 16
generarSubsets("123456");//* 32
