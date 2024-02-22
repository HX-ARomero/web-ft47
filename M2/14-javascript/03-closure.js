//* 1. Función (contenedora) que retorna otra función (anidada)
//* 2. Función anidada utiliza una variable en scope de la función contenedora
//* 3. La función retornada es invocada desde el scope externo

function contador(num) {
  let valor = num;

  return function () {
    return valor++;
  };
}

const miContador = contador(1);
console.log(miContador());
console.log(miContador());
console.log(miContador());

const otroContador = contador(25);
console.log(otroContador());
console.log(otroContador());

console.log(miContador());

// function funcioncontenedora() {
//   let variable = "Soy de función contenedora";

//   return function () {
//     console.log(variable);
//   };
// }

// const funcionAnidada = funcioncontenedora();
// console.log(funcionAnidada);
// funcionAnidada();

//* CALLBACKS
function name(cb) {
  return cb();
}

name(() => {
  console.log("Hola");
});
