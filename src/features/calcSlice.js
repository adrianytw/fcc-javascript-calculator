import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    display: "0",
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
        add: (state, action) => {
            state.display += action.payload.toString()
        },
        subtract: (state, action) => {},
        multiply: (state, action) => {},
        divide: (state, action) => {},
    }
})

export const { add, subtract, multiply, divide, clear } = calcSlice.actions

export default calcSlice.reducer