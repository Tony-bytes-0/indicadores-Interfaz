import { createSlice } from '@reduxjs/toolkit'

const initialRadiography = ''

export const enfermedad = createSlice({
  name: 'enfermedadesList',
  initialState:initialRadiography,
  reducers: {
    
    setEnfermedad: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setEnfermedad } = enfermedad.actions
export default enfermedad.reducer