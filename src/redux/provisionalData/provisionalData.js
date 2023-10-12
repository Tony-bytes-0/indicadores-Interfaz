import { createSlice } from '@reduxjs/toolkit'

export const provisionalData = createSlice({
  name: 'provisionalData',
  initialState: {
    triage: {men:5, women:20} 
  },
  reducers: {

    menSet: (state, action) => {
      return { ...state, triage:{men: action.payload, women:state.triage.women} } },
    womenSet: (state, action) => {
        return { ...state, triage:{women: action.payload, men:state.triage.men} } } },
    
})

export const { menSet, womenSet } = provisionalData.actions

export default provisionalData.reducer