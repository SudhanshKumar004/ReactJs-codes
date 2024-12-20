import { useState } from "react"

function Count(){

    let [c,setC] = useState(0)

    function add(){
        setC(c+1)
    }
    function del(){
        if(c>0){
        setC(c-1)
        }
        else{
            alert("You can't go below zero")
        }
    }
    return(
        <>
        <h1>{c}</h1>
        <button onClick={add}>Increment</button>
        <button onClick={del}>decrement</button>
        </>
    )
}

export default Count