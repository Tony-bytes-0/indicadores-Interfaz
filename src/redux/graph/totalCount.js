import { createSlice } from '@reduxjs/toolkit'

const deff = {
  'Enero':1,
  'Febrero':2,
  'Marzo':3,
  'Abril':4,
  'Mayo':5,
  'Junio':5,
  'Julio':5,
  'Agosto':5,
  'Septiembre':5,
  'Octubre':5,
  'Noviembre':5,
  'Diciembre':5,
}

export const totalCount = createSlice({
  name: 'totalCount',
  initialState: deff,
  reducers: {
    
    setTotalCount: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setTotalCount } = totalCount.actions
export default totalCount.reducer