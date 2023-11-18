import { createSlice } from '@reduxjs/toolkit'

export const activeGraphs = createSlice({
  name: 'activeGraphs',
  initialState: {
    totalAdults:true, diagnostico:true, tension:true, especialidades:true
  },
  reducers: {
    totalAdultsToggle: (state) => {
      if(state.totalAdults === true){return {...state, totalAdults: false}}
      else{return {...state, totalAdults: true}}
    },
    totalDiagnosticoToggle: (state) => {
      if(state.diagnostico === true){return {...state, diagnostico: false}}
      else{return {...state, diagnostico: true}}
    },

    totalTensionToggle: (state) => {
      if (state.tension === true) { return { ...state, tension: false } }
      else { return { ...state, tension: true } }
    },

    totalEspecialidadesToggle: (state) => {
      if (state.especialidades === true) { return { ...state, especialidades: false } }
      else { return { ...state, especialidades: true } }
    },

  },
})

export const { totalAdultsToggle, totalDiagnosticoToggle, totalTensionToggle, totalEspecialidadesToggle } = activeGraphs.actions

export default activeGraphs.reducer