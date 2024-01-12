import { createSlice } from '@reduxjs/toolkit'

const initialRadiography = ''

export const fechaNacimiento = createSlice({
  name: 'fechaNacimiento',
  initialState:initialRadiography,
  reducers: {
    
    setFechaNacimiento: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setFechaNacimiento } = fechaNacimiento.actions
export default fechaNacimiento.reducer