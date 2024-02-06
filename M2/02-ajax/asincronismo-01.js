//* ENSALADA

//* 1- Cortar zanahoria
//* 2- Cortar lechuga * NO HAY => Encargado
//* 3- Cortar tomate * NO HAY => Encargado
//* 4- Servir

//! TIPOS DE TAREAS
//* Dependen de  él => procesos SINCRONOS
//* NO dependen de él => procesos ASINCRONOS
//* NO ESPERA !!!

const cortarZanahoria = () => console.log("Cortar 🥕");
  
const cortarLechuga = (callback) => {
	setTimeout(
		() => {
			console.log("Comprar y cortar 🥬");
			callback();
		},
		2000
	);
};
  
const cortarTomate = (callback) => {
	setTimeout(
		() => {
			console.log("Comprar y cortar 🍅");
			callback();
		},
		1000
	);
};
  
const servir = () => console.log("Servir ensalada");
  
cortarZanahoria();
cortarLechuga(() => {
	cortarTomate(() => {
		servir();
	})
});