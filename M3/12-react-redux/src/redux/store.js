import { configureStore } from "@reduxjs/toolkit";
import invitadosSlice from "./invitadosSlice";

const store = configureStore({
  //* Quién es el organizador
  reducer: {
    invitados: invitadosSlice
  }
});

export default store;