import { useState } from "react"
import { useDispatch } from "react-redux"
import { agregarInvitado } from "../redux/invitadosSlice"

function AgregarInvitado() {

  const [invitado, setInvitado] = useState({
    nombre: "",
    apellido: ""
  })

  const handleChange = (event) => {
    setInvitado({
      ...invitado,
      [event.target.name]: event.target.value
    })
  }

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    //* ENVIAR => ACTION { type: agregarInvitado , payload: }
    dispatch(agregarInvitado(invitado));
    setInvitado({
      nombre: "",
      apellido: ""
    })
  }

  return (
    <div>
      <h2>Agregar Invitado</h2>
      <form onSubmit={handleSubmit}>

        <label htmlFor="nombre">Nombre: </label>
        <input type="text" id="nombre" name="nombre" value={invitado.nombre} onChange={handleChange} />
        <br />

        <label htmlFor="apellido">Apellido: </label>
        <input type="text" id="apellido" name="apellido" value={invitado.apellido} onChange={handleChange}  />
        <br />

        <button type="submit">Agregar</button>
      </form>
    </div>
  )
}

export default AgregarInvitado;