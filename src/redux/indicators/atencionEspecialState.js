import { createSlice } from '@reduxjs/toolkit'


export const atencionEspecialState = createSlice({
    name: 'atencionEspecialState',
    initialState: {
        state:{good: true, low:false, medium: false, high: false, msj:'mensaje inicial'}
    },
    reducers: {

        atencionEspecialStateSet: (state, action) => {
            return {state:action.payload}
        },
    }
})

export const { atencionEspecialStateSet } = atencionEspecialState.actions

export default atencionEspecialState.reducer