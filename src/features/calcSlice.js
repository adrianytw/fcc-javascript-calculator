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
            const newInput = action.payload
            const operators = [
                '+',
                '-',
                '*',
                '/',
                '.',
            ]
            const formulaRegex = /^[1-9](?:\d)*(?:\.\d+)?(?:[+\-*/][-]?\d*(?:\.\d+)?)*/
            const displayRegex = /(^(^[1-9](?:\d)*\.?(?:\d+)?)$)|^[+\-*/]$/
            
            if (state.formula.includes("=")) { // if formula has =
                if (!operators.includes(newInput)) {
                    state.formula = newInput
                    state.display = newInput
                    return state
                }
                state.formula = state.display + newInput
                state.display = newInput
                return state
            }
            if (state.display === 0) { // for first zero case
                state.formula = newInput
                state.display = newInput
                return state
            }
            if (operators.includes(newInput)) {// handle operators
                if (newInput == '.' && state.display.includes('.')) {
                    return state
                }
                if ((newInput == "-") && !operators.includes(state.formula.slice(-2, -1))) { //handle -
                    state.formula += newInput
                    state.display = newInput
                    return state
                }
                if (operators.includes(state.display)) { // display has operators
                    if (operators.includes(state.formula.slice(-2, -1))) { // second last not operator
                        state.formula = state.formula.slice(0,-2) + newInput
                        state.display = newInput
                        return state
                    }
                    state.formula = state.formula.slice(0,-1) +  newInput
                    state.display = newInput
                    return state
                }
            }
            // normal case
            let buffForm = state.formula + newInput
            let buffDisp = state.display + newInput
            if (buffForm.match(formulaRegex) !== null) {
                state.formula += newInput
            }
            if (buffDisp.match(displayRegex) !== null) {
                state.display += newInput
            } else {
                state.display = newInput
            }
            return state
        },
        evaluate: (state) => {
            // const evalRegex = /^\d(?:\d)*(?:\.\d+)?(?:[+\-*\/][-]?\d+(?:\.\d+)?)*/
            if (state.formula.slice(-1).match(/[+\-*/]/)) {
                state.formula = state.formula.slice(0, -1)
            }
            try {
                const ans = math.evaluate(state.formula)
                state.display = ans
                state.formula += `=${ans}`
            } catch (e) {
                state.formula = 'ERROR'
                state.display = 0
            } 
        },
    }
})

export const { input, newNum, clear, evaluate } = calcSlice.actions

export default calcSlice.reducer