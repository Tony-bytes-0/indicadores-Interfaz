import { createSlice } from '@reduxjs/toolkit'


export const lastMonth = createSlice({
    name: 'lastMonth',
    initialState: {
        triage:{ hombres: 50, mujeres: 50, name:'triaje' }, 
        diagnostico: { primeraConsulta: 78, suseciva: 39, name:'diagnostico' }, 
        tension: {normal:28, hipertenso: 74, hipotenso: 34, name:'Tension' }, 
        atencionEspecial: { odontologia: 7, oftalmologia: 5, traumatologia: 28, orl: 4, pediatria: 17, medicinaInterna: 17, name:'Atencion especial' }
    },
    reducers: {

        lastMonthSet: (state, action) => {
            return action.payload
        },
    }
})

export const { lastMonthSet } = lastMonth.actions

export default lastMonth.reducer