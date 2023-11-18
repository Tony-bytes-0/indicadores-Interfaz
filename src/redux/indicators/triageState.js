import { createSlice } from '@reduxjs/toolkit'


export const triageState = createSlice({
    name: 'triageState',
    initialState: {
        state:{good: true, low:false, medium: false, high: false, msj:'mensaje inicial'}
    },
    reducers: {

        triageStateSet: (state, action) => {
            return {state:action.payload}
        },
    }
})

export const { triageStateSet } = triageState.actions

export default triageState.reducer