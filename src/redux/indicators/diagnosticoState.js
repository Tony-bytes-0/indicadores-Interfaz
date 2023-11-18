import { createSlice } from '@reduxjs/toolkit'


export const diagnosticoState = createSlice({
    name: 'diagnosticoState',
    initialState: {
        state:{good: true, low:false, medium: false, high: false, msj:'mensaje inicial'}
    },
    reducers: {

        diagnosticoStateSet: (state, action) => {
            return {state:action.payload}
        },
    }
})

export const { diagnosticoStateSet } = diagnosticoState.actions

export default diagnosticoState.reducer