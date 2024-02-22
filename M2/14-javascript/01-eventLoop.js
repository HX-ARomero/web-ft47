function cortar(ingrediente) {
	console.log("cortar " + ingrediente);
}
  
function comprar(ingrediente) {
	setTimeout(function () {
		console.log("agregar " + ingrediente);
	}, 2000);
}
  
function prepararEnsalada(ingrediente1, ingrediente2) {
	cortar(ingrediente1);
	cortar(ingrediente2);
	comprar("sal");
	console.log("servir");
}
  
prepararEnsalada("🍅", "🥕");