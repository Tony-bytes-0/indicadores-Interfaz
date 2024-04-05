import { createSlice } from "@reduxjs/toolkit";

const initialMedicoState = {
  sacs: 0,
  nombreMedico: "",
  especialidad: "",
  nivelAcademico: {
    id: 0,
    nivelAcademico: "",
  },
};

export const medico = createSlice({
  name: "medico",
  initialState: initialMedicoState,
  reducers: {
    setMedico: (state, action) => {
      return action.payload;
    },
    resetMedico: (state, action) => {
      return initialMedicoState;
    },
  },
});

export const { setMedico, resetMedico } = medico.actions;
export default medico.reducer;
