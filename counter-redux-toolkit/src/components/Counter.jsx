import {increment, decrement, reset} from "../counterSlice"
import {useSelector, useDispatch} from "react-redux"

export default function Counter(){
    const count=useSelector((state)=>state.counter.value)
    const dispatch=useDispatch()

    return(
        <>
        <h2>Count : {count}</h2>
        <button onClick={()=>dispatch(decrement())} disabled={count===0}>Decrement</button>
        <button onClick={()=>dispatch(reset())} disabled={count===0}>Reset</button>
        <button onClick={()=>dispatch(increment())}>Increment</button>

        </>
    )
} 