import { useState } from "react"

function Theme(){

        let [th,setTh] = useState({background:'white'});

        let Change =()=>{
            setTh(th === 'white' ? 'black' : 'white')
        }

    return(
        <>
        <body style={{backgroundColor:th,height:"100vh",width:"100vw"}}></body>
        <button onClick={Change}>{(th) ? "Light" : "Dark"}</button>
        </>
    )
}

export default Theme