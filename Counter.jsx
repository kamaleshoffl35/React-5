import { useState } from "react";

function Counter(){
    const[count,setCount] = useState(0)
    const Inc = () =>{
        setCount(count+1)
    }
    const Dec = () =>{
        setCount(count-1)
    }
    return (
        <>
        <h1>Counter Application {count}</h1>
        <button onClick = {Inc}>Increase</button>
        <button onClick = {Dec}>Decrease</button>
        </>
    )
}
export default Counter