import { createSlice } from '@reduxjs/toolkit'

const initialRadiography = ''

export const nivelAcademico = createSlice({
  name: 'nivelAcademico',
  initialState: initialRadiography,
  reducers: {
    
    setNivelAcademico: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setNivelAcademico } = nivelAcademico.actions
export default nivelAcademico.reducer