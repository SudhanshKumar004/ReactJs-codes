import { useRef, useState } from "react"

const Box = () =>{

    let ref = useRef("")
    function changee()
    {
        ref.current.style.backgroundColor = "green"
    }
    function leave()
    {
        ref.current.style.backgroundColor = "orange"
    }
    return(
        <>
            <div ref={ref} onMouseEnter={changee} onMouseLeave={leave} className="box" style={{padding:"100px",backgroundColor:"red"}}>

            </div>
        </>
    )
}

export default Box