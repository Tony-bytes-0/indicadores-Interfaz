import { createSlice } from '@reduxjs/toolkit'
const graph = { 

  borderColor: [
      'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',  'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)',
    ],

  backgroundColor:[
      'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)',
  ]
}

export const lastMonth = createSlice({
    name: 'lastMonth',
    initialState: {
        triage:{ hombres: 100, mujeres: 120 }, 
        diagnostico: { primeraConsulta: 78, suseciva: 39 }, 
        tension: {normal:28, hipertenso: 74, hipotenso: 34 }, 
        atencionEspecial: { odontologia: 7, oftalmologia: 5, traumatologia: 28, orl: 4, pediatria: 17, medicinaInterna: 17 }
    },
    reducers: {

        lastMonthSet: (state, action) => {
            return action.payload
        },
    }
})

export const { lastMonthSet } = lastMonth.actions

export default lastMonth.reducer