import { createSlice } from 'reduxjs/toolkit'

initialState = {
    num: 0,
}

export const calcSlice = createSlice({
    name: 'calc',
    initialState,
    reducers: {
        clear: (state, action) => {
            state.num = 0
        },
        add: (state, action) => {
            
        },
        subtract: (state, action) => {},
        multiply: (state, action) => {},
        divide: (state, action) => {},
    }
})

export const { addition, subtraction, multiplication, division } = calcSlice.actions

export default calcSlice.reducer