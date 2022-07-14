import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    display: "",
    total: 0,
}

export const calcSlice = createSlice({
    name: 'calc',
    initialState,
    reducers: {
        clear: (state) => {
            state.display = "0"
            state.total =  0
        },
        newNum: (state, action) => {
            state.display += action.payload.toString()
            state.total = parseInt(state.display)
        },
        subtract: (state, action) => {},
        multiply: (state, action) => {},
        divide: (state, action) => {},
    }
})

export const { newNum, subtract, multiply, divide, clear } = calcSlice.actions

export default calcSlice.reducer