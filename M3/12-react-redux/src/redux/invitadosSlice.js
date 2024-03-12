import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  // { id: 1, nombre: "Homero", apellido: "Simpson"},
  // { id: 2, nombre: "Lisa", apellido: "Simpson"},
];
let siguienteId = 1;

export const invitadosSlice = createSlice({
  //* Nombre
  name: "invitados",
  //* Estado inicial
  initialState,
  //* Lógica
  reducers: {
    agregarInvitado: (state, action) => {
      const nuevoInvitado = {
        ...action.payload, id: siguienteId++
      }
      state.push(nuevoInvitado);
    },
    quitarInvitado: (state, action) => {
      //* action.payload = id
      return state.filter(invitado => invitado.id !== action.payload);
    }
  }
});
//* invitadosSlice = { actions: { agregarInvitado, quitarInvitado }, reducer }
export const { agregarInvitado, quitarInvitado } = invitadosSlice.actions;
export default invitadosSlice.reducer;