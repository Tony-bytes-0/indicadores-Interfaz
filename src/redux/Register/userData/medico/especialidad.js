import { createSlice } from '@reduxjs/toolkit'

const initialRadiography = ''

export const especialidad = createSlice({
  name: 'especialidad',
  initialState:initialRadiography,
  reducers: {
    
    setEspecialidad: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setEspecialidad } = especialidad.actions
export default especialidad.reducer