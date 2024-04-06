import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

export const satisfaccion = createSlice({
  name: 'satisfaction',
  initialState:initialState,
  reducers: {
    
    setSatisfaccion: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setSatisfaccion } = satisfaccion.actions
export default satisfaccion.reducer