import { useState } from "react"
import './Count.css'

function Counter(){

    let [count, setCount] = useState(0)

    function add(){
        setCount(count+5)
    }
    function del(){
        if(count>0)
        {
            setCount(count-1)
        }
        else{
            alert("Cant go below Zero")
        }
    }

    
    return(

        <>
        <h1>COUNTER</h1>
        <h1 className="head">{count}</h1>
        <br />
        <button onClick={add}>Increment</button>
        <button onClick={del}>Decrement</button>
        </>
    )
}

export default Counter