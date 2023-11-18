import { createSlice } from '@reduxjs/toolkit'


export const tensionState = createSlice({
    name: 'tensionState',
    initialState: {
        state:{good: true, low:false, medium: false, high: false, msj:'mensaje inicial'}
    },
    reducers: {

        tensionStateSet: (state, action) => {
            return {state:action.payload}
        },
    }
})

export const { tensionStateSet } = tensionState.actions

export default tensionState.reducer