import { useState } from "react"

function Bg(){

    let [cl, setCl] = useState(yellow)

    function red(){
        setCl(cl=red)
    }
    function blue(){
        setCl(cl=blue)
    }
    function green(){
        setCl(cl=green)
    }
    function yellow(){
        setCl(cl=yellow)
    }

    return(

        <>
            <div className="divv" style={{height:"100vh", width:"100vw",background:"yellow"}}>
                <button onClick={red}>Red</button>
                <button onClick={blue}>Blue</button>
                <button onClick={green}>Green</button>
                <button onClick={yellow}>Yellow</button>
            </div>
        </>
    )
}

export default Bg