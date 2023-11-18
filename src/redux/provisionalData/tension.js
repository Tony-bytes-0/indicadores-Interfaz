import { createSlice } from '@reduxjs/toolkit'

export const tension = createSlice({
    name: 'tension',
    initialState: {
        tension: {normal:0, hipertenso: 1, hipotenso: 2 }
    },
    reducers: {

        normalSet: (state, action) => {
            return { ...state, tension: {normal:action.payload, hipertenso: state.tension.hipertenso, hipotenso: state.tension.hipotenso } }
        },

        hipertensoSet: (state, action) => {
            return { ...state, tension: {normal:state.tension.normal, hipertenso: action.payload, hipotenso: state.tension.hipotenso } }
        },

        hipotensoSet: (state, action) => {
            return { ...state, tension: {normal:state.tension.normal, hipertenso: state.tension.hipertenso, hipotenso: action.payload } }
        },

    }
})

export const { normalSet, hipertensoSet, hipotensoSet} = tension.actions

export default tension.reducer