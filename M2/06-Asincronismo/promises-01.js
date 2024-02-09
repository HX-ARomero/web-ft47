//? PROMESA
let promesa = {
  status: "pending"
}

//* RESUELTA
promesa = {
  status: "fulfilled",
  resolve: "tomate"
}

//! RECHAZADA
promesa = {
  status: "rejected",
  reject: "Motivo del fracaso"
}

promesa
  .then(
    //* succesHandler
    (ingrediente) => {
      console.log(ingrediente)
    },
    //! errorHandler
    (motivo) => {
      console.log(motivo)
    }
  )