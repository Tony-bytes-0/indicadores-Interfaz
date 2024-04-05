import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

export const satisfaction = createSlice({
  name: 'satisfaction',
  initialState:initialState,
  reducers: {
    
    setSatisfaction: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setsatisfaction } = satisfaction.actions
export default satisfaction.reducer