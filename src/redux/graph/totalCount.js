import { createSlice } from '@reduxjs/toolkit'

const initialRadiography = '5'

export const totalCount = createSlice({
  name: 'totalCount',
  initialState: initialRadiography,
  reducers: {
    
    setTotalCount: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setTotalCount } = totalCount.actions
export default totalCount.reducer