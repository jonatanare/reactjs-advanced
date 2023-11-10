import { useCounter } from "../hooks/useCounter"


export const CounterHook = () => {
    
    const { counter, elemenToAnimate, handleClick } = useCounter({
      maxCount: 15,
      initalCount: 2
    })
  return (
    <>
        <h1>Counter Hook:</h1>
        <h2 ref={elemenToAnimate}>{ counter }</h2>
        <button onClick={handleClick}>+1</button>
    </>
  )
}
