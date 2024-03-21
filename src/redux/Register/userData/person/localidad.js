import { createSlice } from '@reduxjs/toolkit'

const initialRadiography = ''

export const localidad = createSlice({
  name: 'localidad',
  initialState:initialRadiography,
  reducers: {
    
    setLocalidad: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setLocalidad } = localidad.actions
export default localidad.reducer