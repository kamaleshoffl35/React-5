import { useState } from "react";

function Color(){
    const[bgcolor, setBgcolor] = useState("white")
    const changecolor = (color) =>{
        setBgcolor(color)
    }
    return(
        <>
        <div style={{backgroundColor: bgcolor, padding:"20px"}}>This is a color box</div>
        <button onClick={()=>changecolor("red")}>Red</button>
        <button onClick={()=>changecolor("green")}>Green</button>
        <button onClick={()=>changecolor("blue")}>Blue</button>
        </>
    )
}
export default Color