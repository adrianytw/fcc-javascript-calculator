import './Calculator.css'

import { useSelector, useDispatch } from 'react-redux'
import { newNum, clear } from '../features/calcSlice'
import { isCompositeComponent } from 'react-dom/test-utils'

const Calculator = () => {

    const { total, display } = useSelector( state => state.calc )
    const dispatch = useDispatch()

    const numKeys = {
        one: '1',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nine: '9',
        zero: '0',
    }

    return (
        <div id='calculator'>
                
            <div id='displayArea'>
                <h2 id='idk'>{display}</h2>
                <h2 id='display'>{total}</h2>
            </div>
            <div id='keys'>
                <button id='equals'
                    onClick={ () => dispatch(newNum(1))}>=</button>
                {
                    Object.keys(numKeys).map( (key, index) => {
                        const data = numKeys[key]
                        console.log(key, data)
                        return (
                            <button id={key}
                                onClick={ () => dispatch(newNum(data))}>{data}</button>
                        )
                    })
                }
                <button id='decimal'>.</button>
                <button id='clear'
                    onClick={ () => dispatch(clear())}>AC</button>
                <button id='add'>+</button>
                <button id='subtract'>-</button>
                <button id='multiply'>*</button>
                <button id='divide'>/</button>
            </div>
        </div>
    )
}

export default Calculator