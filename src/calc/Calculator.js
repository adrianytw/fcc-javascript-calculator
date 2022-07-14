import './Calculator.css'

import { useSelector, useDispatch } from 'react-redux'
import { input, clear, evaluate } from '../features/calcSlice'
// import { isCompositeComponent } from 'react-dom/test-utils'

const Calculator = () => {

    const { display, formula } = useSelector( state => state.calc )
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
        add: "+",
        subtract: "-",
        multiply: "*",
        divide: "/",
        decimal: ".",
    }

    return (
        <div id='calculator'>
            <div id='displayArea'>
                <h2 id='idk'>{formula}</h2>
                <h2 id='display'>{display}</h2>
            </div>
            <div id='keys'>
                <button id='equals'
                    onClick={ () => dispatch(evaluate())}>=</button>
                {
                    Object.keys(numKeys).map( (key) => {
                        const data = numKeys[key]
                        return (
                            <button
                                id={key}
                                key={key}
                                onClick={ () => dispatch(input(data))}>{data}</button>
                        )
                    })
                }
                <button id='clear'
                    onClick={ () => dispatch(clear())}>AC</button>

            </div>
        </div>
    )
}

export default Calculator