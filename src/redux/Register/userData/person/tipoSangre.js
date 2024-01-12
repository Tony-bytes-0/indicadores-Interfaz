import { createSlice } from '@reduxjs/toolkit'

const initialRadiography = ''

export const tipoSangre = createSlice({
  name: 'tipo_sangre',
  initialState:initialRadiography,
  reducers: {
    
    setTipoSangre: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setTipoSangre } = tipoSangre.actions
export default tipoSangre.reducer