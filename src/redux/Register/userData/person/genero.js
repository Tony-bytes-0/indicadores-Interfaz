import { createSlice } from '@reduxjs/toolkit'

const initialRadiography = ''

export const genero = createSlice({
  name: 'genero',
  initialState:initialRadiography,
  reducers: {
    
    setGenero: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setGenero } = genero.actions
export default genero.reducer