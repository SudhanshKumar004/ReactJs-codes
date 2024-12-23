import { useEffect, useState } from "react"

function Comp(){
    let [change,setChange] = useState('yellow')
    useEffect(()=>{alert("call")},[change])

    function red(){
        setChange('red')
    }

    function blue(){
        setChange('blue')
    }

    function green(){
        setChange('green')
    }

    function yellow(){
        setChange('yellow')
    }



    return(
        <>
        <div style={{height:'50vh',width:'50vw',backgroundColor:change}}>
        </div>
        <button onClick={red}>Red</button>
        <button onClick={blue}>Blue</button>
        <button onClick={yellow}>Yellow</button>
        <button onClick={green}>Green</button>
        </>
    )
}

export default Comp