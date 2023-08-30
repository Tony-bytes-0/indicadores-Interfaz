import { createSlice } from '@reduxjs/toolkit'

export const activeGraphs = createSlice({
  name: 'activeGraphs',
  initialState: {
    totalAdults:true, totalAdultQuery:true
  },
  reducers: {
    totalAdultsToggle: (state) => {
      if(state.totalAdults === true){return {...state, totalAdults: false}}
      else{return {...state, totalAdults: true}}
    },
    totalAdultQueryToggle: (state) => {
      if(state.totalAdultQuery === true){return {...state, totalAdultQuery: false}}
      else{return {...state, totalAdultQuery: true}}
    },

  },
})

export const { totalAdultsToggle, totalAdultQueryToggle } = activeGraphs.actions

export default activeGraphs.reducer