import { use } from "react"
import { useState } from "react"

const Frm = () => {

    let[h,setH] = useState('')
    let[c,setC] = useState('')
    let[b,setB] = useState(false)
    let[d,setD] = useState(false)

    function hinput(event){
        console.log(event.target.value)
        setH(event.target.value)
    }
    function ab(){
        setB(!(b))
        setD(!(d))
    }

    function inp2(i)
    {
        setC(i.target.value)

    }

    return(
        <>
        <h1>Name is {b ? h : '' }</h1>
        <h1>Work is {d ? c : '' }</h1>
        <input type="text" onChange={hinput} placeholder="name" /><br />
        <input type="text" onChange={inp2} placeholder="work" /><br />
        <button onClick={ab}>Submit</button>
        </>
    )
}

export default Frm
