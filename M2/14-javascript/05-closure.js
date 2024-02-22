function operacionAsincronica(parametroInicial) {
	let estado = "En progreso";
	function callback() {
		console.log(
		`Operación asincrónica completada con parámetro: ${parametroInicial}`
		);
		console.log(`Estado actual: ${estado}`);
	}
	
	setTimeout(function () {
		estado = "Completada";
		callback();
	}, 3000);
	
	return callback;
}

// Creamos una instancia de la operación asincrónica
const miOperacion = operacionAsincronica("Bartolomiau");
// La ejecución de la operación asincrónica comenzará, pero aún no se ha completado
console.log("Operación en curso...");
  
miOperacion();


//! DESDE las 11hs HASTA las 12:30hs
//* Una vez que ingresan => 2hs para completar el CP