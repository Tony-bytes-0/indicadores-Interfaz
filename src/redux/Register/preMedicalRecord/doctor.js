import { createSlice } from '@reduxjs/toolkit'

const initialRadiography = ''

export const doctor = createSlice({
  name: 'doctor',
  initialState: initialRadiography,
  reducers: {
    
    setDoctor: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setDoctor } = doctor.actions
export default doctor.reducer