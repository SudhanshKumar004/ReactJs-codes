import { useEffect, useState } from "react"

const Counter =()=>
{

    let[change,setChange] = useState(0)
    useEffect(()=>{alert("called")},[change])

    function inc(){
        setChange(change+1)
    }
    return(
        <>
            <h1>Number is {change}</h1>
            <button onClick={inc}>increase</button>
        </>
    )    
}

export default Counter