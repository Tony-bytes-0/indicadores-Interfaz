import { createSlice } from '@reduxjs/toolkit'

const initialRadiography = ''

export const indicatiorSelectedMonth = createSlice({
  name: 'indicatiorSelectedMonth',
  initialState: initialRadiography,
  reducers: {
    
    setSelectedMonth: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setSelectedMonth } = indicatiorSelectedMonth.actions
export default indicatiorSelectedMonth.reducer