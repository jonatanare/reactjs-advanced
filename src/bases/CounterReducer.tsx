import React, { useReducer } from 'react'

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITAL_STATE: CounterState = {
  counter: 10,
  previous: 10,
  changes: 10
}

type CounterAction = 
  | { type: 'increaseBy', payload: { value: number }}
  | { type: 'reset' };

const counterReducer = ( state: CounterState, action: CounterAction ): CounterState => {
  switch (action.type) {
    case 'reset':
      return {
        counter: 0,
        previous: 0,
        changes: 0
      }
    case 'increaseBy':
      return {
        changes: state.changes + 1,
        counter: state.counter + action.payload.value,
        previous: state.counter
      }
    default:
      return state
  }
}

export const CounterReducerComponent = () => {

    const [counterState, dispatch] = useReducer(counterReducer, INITAL_STATE)

    const handleReset = () => {
        dispatch({ type: 'reset'})
    }

    const increaseBy = ( value: number ) => {
      dispatch({ type: 'increaseBy', payload: { value }})
    }
  return (
    <>
        <h1>Counter Reducer</h1>
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
