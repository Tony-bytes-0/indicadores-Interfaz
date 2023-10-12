import { createSlice } from '@reduxjs/toolkit'

export const atencionEspecial = createSlice({
    name: 'atencionEspecial',
    initialState: {
        atencionEspecial: { odontologia: 1, oftalmologia: 2, traumatologia: 3, orl: 4, pediatria: 5, medicinaInterna: 6 }
    },
    reducers: {

        odontologuiaSet: (state, action) => {
            return { ...state, atencionEspecial: { 
                odontologia: action.payload,
                oftalmologia: state.atencionEspecial.oftalmologia,
                traumatologia: state.atencionEspecial.traumatologia,
                orl: state.atencionEspecial.orl, 
                pediatria: state.atencionEspecial.pediatria,
                medicinaInterna: state.atencionEspecial.medicinaInterna } }
        },

        oftalmologuiaSet: (state, action) => {
            return { ...state, atencionEspecial: { 
                odontologia: state.atencionEspecial.odontologia, 
                oftalmologia: action.payload, 
                traumatologia: state.atencionEspecial.traumatologia,
                orl: state.atencionEspecial.orl, 
                pediatria: state.atencionEspecial.pediatria, 
                medicinaInterna: state.atencionEspecial.medicinaInterna }}
        },
        
        traumatologuiaSet: (state, action) => {
            return { ...state, atencionEspecial: { 
                odontologia: state.atencionEspecial.odontologia,
                oftalmologia: state.atencionEspecial.oftalmologia, 
                traumatologia: action.payload, 
                orl: state.atencionEspecial.orl, 
                pediatria: state.atencionEspecial.pediatria, 
                medicinaInterna: state.atencionEspecial.medicinaInterna } }
        },

        orlSet: (state, action) => {
            return { ...state, atencionEspecial: { 
                odontologia: state.atencionEspecial.odontologia, 
                oftalmologia: state.atencionEspecial.oftalmologia, 
                traumatologia: state.atencionEspecial.traumatologia, 
                orl: action.payload, 
                pediatria: state.atencionEspecial.pediatria, 
                medicinaInterna: state.atencionEspecial.medicinaInterna } }
        },

        pediatriaSet: (state, action) => {
            return { ...state, atencionEspecial: { 
                odontologia: state.atencionEspecial.odontologia, 
                oftalmologia: state.atencionEspecial.oftalmologia, 
                traumatologia: state.atencionEspecial.traumatologia, 
                orl: state.atencionEspecial.orl, 
                pediatria: action.payload,
                medicinaInterna: state.atencionEspecial.medicinaInterna } }
        },

        medicinaInternaSet: (state, action) => {
            return { ...state, atencionEspecial: { 
                odontologia: state.atencionEspecial.odontologia, 
                oftalmologia: state.atencionEspecial.oftalmologia, 
                traumatologia: state.atencionEspecial.traumatologia, 
                orl: state.atencionEspecial.orl,
                pediatria: state.atencionEspecial.pediatria, 
                medicinaInterna: action.payload } }
        },

    }
})

export const { odontologuiaSet, oftalmologuiaSet, traumatologuiaSet, orlSet, pediatriaSet, medicinaInternaSet } = atencionEspecial.actions

export default atencionEspecial.reducer