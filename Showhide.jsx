import { useState } from "react";

function Showhide(){
    const[password, setPassword] = useState("")
    const[showpassword, setShowpassword] = useState(false)
    const handlechange = (e) =>{
        setPassword(e.target.value)
    }
    const hide = () => {
        setShowpassword((prev) => !prev)
    }
    return(
        <div>
            <input type = {showpassword ? "text" : "password"} onChange={handlechange} value={password}></input>
            <button onClick={hide}>{showpassword ? "Hide" : "Show"}</button>
        </div>
    )
}
export default Showhide