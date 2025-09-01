import { useState } from "react";

function TextCount(){
    const[text,setText] = useState("")
    const texts = (e) =>{
         setText(e.target.value)
    }
    return (
    <div>
        <input type="text" name="text" onChange={texts}/>
        <div>
            {text.length}
        </div>
    </div>
)
}
export default TextCount