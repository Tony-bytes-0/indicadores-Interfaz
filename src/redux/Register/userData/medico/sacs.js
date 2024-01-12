import { createSlice } from '@reduxjs/toolkit'

const initialRadiography = ''

export const sacs = createSlice({
  name: 'sacs',
  initialState:initialRadiography,
  reducers: {
    
    setSacs: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setSacs } = sacs.actions
export default sacs.reducer