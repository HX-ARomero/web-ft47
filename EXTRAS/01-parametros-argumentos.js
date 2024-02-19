function sum(a, b, c, d, e) {
  //* let a = 1;
  //* let b = 2;
  console.log(arguments);
  console.log("Argumentos:", arguments.length);
  console.log("Parámetros:", sum.length);
  return a + b;
}

sum(1, 2, 3, 4);