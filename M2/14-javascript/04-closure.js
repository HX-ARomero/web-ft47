//* CLOSURES
//* 1. Fábrica de funciones
//* 2. Proteger variables

function cuenta(nombre, saldoInicial) {
  const usuario = nombre;
  let saldo = saldoInicial;

  return {
    depositar: function(monto) {
      saldo += monto;
      return `Usuario ${usuario} - Saldo: ${saldo}`
    },
    extraer: function(monto) {
      saldo -= monto;
      return `Usuario ${usuario} - Saldo: ${saldo}`
    },
    consultar: function(monto) {
      return `Usuario ${usuario} - Saldo: ${saldo}`
    },
  }
}

const cuentaDeMarge = cuenta("Marge", 100); // { depositar, extraer, consultar }
console.log(cuentaDeMarge.depositar(20));

const cuentaDeHomero = cuenta("Homero", 50);
console.log(cuentaDeHomero.extraer(20));