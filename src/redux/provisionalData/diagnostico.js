import { createSlice } from '@reduxjs/toolkit'

export const diagnostico = createSlice({
    name: 'diagnostico',
    initialState: {
        diagnostico: { primeraConsulta: 1, suseciva: 2 }
    },
    reducers: {

        primeraConsultaSet: (state, action) => {
            return { ...state,  diagnostico: { primeraConsulta: action.payload, suseciva: state.diagnostico.suseciva } }
        },

        susecivaSet: (state, action) => {
            return { ...state,  diagnostico: { primeraConsulta: state.diagnostico.primeraConsulta, suseciva: action.payload } }
        },

    }
})

export const { primeraConsultaSet, susecivaSet} = diagnostico.actions

export default diagnostico.reducer