import { createSlice } from '@reduxjs/toolkit'

import { create, all } from 'mathjs'

const config = { }
const math = create(all, config)

const initialState = {
    formula: "",
    display: 0,
}

export const calcSlice = createSlice({
    name: 'calc',
    initialState,
    reducers: {
        clear: (state) => {
            state.formula = ""
            state.display =  0
        },
        input: (state, action) => {
            const newInput = action.payload.toString()
            const operators = [
                '+',
                '-',
                '*',
                '/',
            ]
            if (newInput.match(/\d/) !== null) { //not digit

            }
            if (state.formula.includes("=")) {
                state.formula = state.display + newInput
                state.display = newInput
                return state
            }
            if (state.formula.slice(0) == 0 ) { // to remove first letter 0
                state.formula = newInput
                state.display = newInput
                return state
            }
            if (operators.includes(state.display[0])) {
                state.formula += newInput
                state.display = newInput
                return state
            }
            state.formula += newInput
            state.display += newInput
            return state
        },
        evaluate: (state) => {
            // const regex = /^\d+([+\-*/]\d+)+/gm
            // console.log(state.formula.match(regex))
            // if (state.formula.match(regex) !== null) {
            //     const ans = math.evaluate(state.formula)
            //     state.display = ans
            //     state.formula += `=${ans}`
            // }
            if (state.formula.slice(-1).match(/[+\-*\/]/)) {
                state.formula = state.formula.slice(0, -1)
            }
            const ans = math.evaluate(state.formula)
            state.display = ans
            state.formula += `=${ans}`
        },
    }
})

export const { input, newNum, clear, evaluate } = calcSlice.actions

export default calcSlice.reducer