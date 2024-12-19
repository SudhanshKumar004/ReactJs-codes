import { useState } from "react"

function TF(){
    
    let [h, setH] = useState(false)

    let p = ''
       
        if(h){
            p = <h1>Time is now</h1>
        }
        else{
            p = ''
        }
    
    return(
        <>
        {p}
            <button onClick={()=>setH(!h)}>Change</button>
            {/* <button onClick={()=>setH(false)}>Hide</button> */}
        </>
    )
}

export default TF