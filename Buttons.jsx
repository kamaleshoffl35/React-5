import { useCallback, useState } from "react"

function Child({onIncrement, onDecrement}){
     console.log("ReRendering")
     return(
        <>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
        </>
     )
}
function Buttons(){
    const [count, setCount] = useState(0)
    const [other, setOther] = useState(0)
    const handleincrement = useCallback(()=>{
        setCount((prev)=>prev+1)
    },[])
    const handledecrement = useCallback(()=>{
        setCount((prev)=>prev-1)
    },[])
    return(
        <div>
            <p>Count: {count}</p>
            <Child onIncrement={handleincrement} onDecrement={handledecrement} />
            <button onClick={()=>setOther(other+1)}>Update other</button>
            <p>Other: {other}</p>
        </div>
    )
}
export default Buttons