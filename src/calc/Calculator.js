import './Calculator.css'

import { useSelector, useDispatch } from 'react-redux'
import { add, clear } from '../features/calcSlice'
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
        one: '1',
    }

    return (
        <div id='calculator'>
            {/* <div id='displayArea'>
            <h2 id='idk'>{display}</h2>
            </div> */}
            <h2 id='display'>{total}</h2>
            <button id='equals'
                onClick={ () => dispatch(add(1))}>=</button>
            <button id='zero'>0</button>
            <button id='one'
                onClick={ () => dispatch(add(1))}>1</button>
            <button id='two'>2</button>
            <button id='three'>3</button>
            <button id='four'>4</button>
            <button id='five'>5</button>
            <button id='six'>6</button>
            <button id='seven'>7</button>
            <button id='eight'>8</button>
            <button id='nine'>9</button>
            <button id='decimal'>.</button>
            <button id='clear'
                onClick={ () => dispatch(clear())}>AC</button>
            <button id='add'>+</button>
            <button id='subtract'>-</button>
            <button id='multiply'>*</button>
            <button id='divide'>/</button>
        </div>
    )
}

export default Calculator