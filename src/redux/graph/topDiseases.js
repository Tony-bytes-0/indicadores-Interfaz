import { createSlice } from '@reduxjs/toolkit'


export const topDiseases = createSlice({
    name: 'topDiseases',
    initialState: [],
    reducers: {

        setTopDiseases: (state, action) => {
            return action.payload
        },
    }
})

export const { setTopDiseases } = topDiseases.actions

export default topDiseases.reducer