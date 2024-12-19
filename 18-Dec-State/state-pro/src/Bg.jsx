import { useState } from "react"

function Bg(){

    let [cl, setCl] = useState({background:"yellow"})

    function red(){
        setCl("red")
    }
    function blue(){
        setCl("blue")
    }
    function green(){
        setCl("green")
    }
    function yellow(){
        setCl("yellow")
    }

    return(

        <>
            <div className="divv" style={{height:"100vh", width:"100vw",background:cl}}>
                <button onClick={red}>Red</button>
                <button onClick={blue}>Blue</button>
                <button onClick={green}>Green</button>
                <button onClick={yellow}>Yellow</button>
            </div>
        </>
    )
}

export default Bg