const promise = new Promise(function(resolve, reject) {
  //* Código Asíncrono
  const resultado = "tomate";
  setTimeout(() => {
    if(resultado === "tomate") {
      resolve(resultado);
    } else {
      reject(resultado);
    }
  }, 1000);
});

// console.log(promise);

promise
  .then(
    //* succesHandler
    (ingrediente) => {
      console.log(`Cortar ${ingrediente}`);
      return "lechuga";
    }
  )
  .then(
    //* succesHandler
    (ingrediente) => {
      console.log(`Cortar ${ingrediente}`);
      return "zanahoria";
    }
  )
  .then(
    //* succesHandler
    (ingrediente) => console.log(`Cortar ${ingrediente}`)
  )
  .catch(
    //! errorHandler
    (motivo) => console.log(motivo, "Agregar cebolla...")
  )
  .finally(() => console.log("Servir..."));