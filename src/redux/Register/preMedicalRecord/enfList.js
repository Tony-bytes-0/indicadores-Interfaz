import { createSlice } from '@reduxjs/toolkit'

const initialRadiography = []

export const enfList = createSlice({
  name: 'enfermedadesList',
  initialState:initialRadiography,
  reducers: {
    
    setEnfList: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setEnfermedadesList } = enfList.actions
export default enfList.reducer