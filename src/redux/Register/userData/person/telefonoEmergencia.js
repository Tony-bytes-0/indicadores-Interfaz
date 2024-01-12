import { createSlice } from '@reduxjs/toolkit'

const initialRadiography = ''

export const telefonoEmergencia = createSlice({
  name: 'telefonoEmergencia',
  initialState:initialRadiography,
  reducers: {
    
    setTelefonoEmergencia: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setTelefonoEmergencia } = telefonoEmergencia.actions
export default telefonoEmergencia.reducer