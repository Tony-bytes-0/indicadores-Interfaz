import { createSlice } from '@reduxjs/toolkit'

const initialRadiography = ''

export const nombreMedico = createSlice({
  name: 'nombreMedico',
  initialState:initialRadiography,
  reducers: {
    
    setNombreMedico: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setNombreMedico } = nombreMedico.actions
export default nombreMedico.reducer