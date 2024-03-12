import { createSlice } from "@reduxjs/toolkit";

const initialRadiography = {
  id: "",
  identificacion: "estoy vacio",
  nombre: "",
  apellido: "",
  genero: "",
  telefono: "",
  telefonoEmergencia: "",
  fechaNacimiento: "",
  tipoSangre: "",
  direccion: "",
  alergias: "",
};

export const size = createSlice({
  name: "updatePerson",
  initialState: initialRadiography,
  reducers: {
    setUpdatePerson: (state, action) => {
      return action.payload;
    },
    clearUpdatePerson: (state, action) => {
      return {
        id: "",
        identificacion: "estoy vacio",
        nombre: "",
        apellido: "",
        genero: "",
        telefono: "",
        telefonoEmergencia: "",
        fechaNacimiento: "",
        tipoSangre: "",
        direccion: "",
        alergias: "",
      };
    },
  },
});

export const { setUpdatePerson, clearUpdatePerson } = size.actions;
export default size.reducer;
