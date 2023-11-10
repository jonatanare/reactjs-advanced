import React, { useReducer } from 'react'
import { CounterState } from './interfaces/interfaces'
import { counterReducer } from './state/counterReducer'
import { doIncreaseBy, doReset } from './actions/actions'

const INITAL_STATE: CounterState = {
  counter: 10,
  previous: 10,
  changes: 10
}



export const CounterReducerComponent = () => {

    const [counterState, dispatch] = useReducer(counterReducer, INITAL_STATE)

    const handleReset = () => {
        dispatch( doReset() )
    }

    const increaseBy = ( value: number ) => {
      dispatch( doIncreaseBy(value) )
    }
  return (
    <>
        <h1>Counter Reducer Segmentado</h1>
        <pre>
          { JSON.stringify( counterState, null, 2 )}
        </pre>
        <button onClick={ () => increaseBy(1) }>
          +1
        </button>
        <button onClick={ () => increaseBy(5) }>
          +5
        </button>
        <button onClick={ () => increaseBy(10) }>
          +10
        </button>
        <button onClick={ handleReset }>Reset</button>
    </>
  )
}
