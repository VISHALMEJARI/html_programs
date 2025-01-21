import { useState } from "react"

function Test4(){
    let[name,updateName]=useState("Vishal")
    return(
        <div>
            <h2>Name of the student : {name} </h2>
            <button onClick={()=>updateName("Vishal Mejari")}>Increment</button>
            <button onClick={()=>updateName("V Mejari")}>Decrement</button>
        </div>
    )
}
export default Test4