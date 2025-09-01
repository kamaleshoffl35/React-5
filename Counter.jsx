import { useReducer } from "react";

function reducer(state,action){
    switch(action.type){
        case "Increment":
            return {count: state.count + 1 }
        case "Decrement":
            return {count: state.count - 1}
        case "reset":
            return {count: state.count = 0 }
        default:
            return 0
    }
}
function Counter(){
    const [state, dispatch] = useReducer(reducer, {count : 0})
    return(
        <>
        <p>{state.count}</p>
        <button onClick={()=>{dispatch({type : "Increment"})}}>Increment</button>
        <button onClick={()=>{dispatch({type : "Decrement"})}}>Decrement</button>
        <button onClick={()=>{dispatch({type : "Reset"})}}>Reset</button>
        </>
    )
}
export default Counter