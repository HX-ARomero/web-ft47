//* 1.0.0
function suma(a, b) {
  const resultado = a + b;
  return resultado;
}

//* 1.0.1
function suma(a, b) {
  return a + b;
}
suma(2, 3);

//* 1.1.0
function suma(...args) {
  //* [ a, b, c, d, ... ]
  return args.reduce((acc, num) => acc + num, 0);
}
suma(2, 3, 4, 5)

//* 2.0.0
function suma(type, ...args) {
	console.log(args);
	if(type === "sum"){
		return args.reduce((acc, num) => acc + num, 0);
	}
	if(type === "mul") {
		return args.reduce((acc, num) => acc * num, 1);
	}
	return null;
}
suma("sum", 2, 3, 4, 5);
suma("mul", 2, 3, 4, 5);