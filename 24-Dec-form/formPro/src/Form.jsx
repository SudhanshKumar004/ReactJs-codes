import { use } from "react"
import { useState } from "react"

const Frm = () => {

    let[h,setH] = useState('')
    let[c,setC] = useState('')
    let[b,setB] = useState(false)

    function hinput(event){
        console.log(event.target.value)
        setH(event.target.value)
    }
    function ab(){
        setB(true)
    }

    return(
        <>
        <h1>Name is {b ? h : '' }</h1>
        {/* <h2>Work is {c}</h2> */}
        <input type="text" onChange={hinput} /><br />
        {/* <input type="text" onChange={inp2} /> */}
        <button onClick={ab}>Submit</button>
        </>
    )
}

export default Frm
