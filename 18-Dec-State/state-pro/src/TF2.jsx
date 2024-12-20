import { useState } from "react"

function TF2(){

    let [show, setShow] = useState(false)
    
    return(

        <>
            {(show) ? <h2>Success</h2> : ""}
            <button onClick={()=>setShow(!show)}>{(show) ? "Hide" : "Display"}</button>
        </>

)
}

export default TF2