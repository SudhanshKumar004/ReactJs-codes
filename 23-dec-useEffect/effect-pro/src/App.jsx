import { useEffect, useState } from 'react'
import './App.css'
import { use } from 'react'
import Comp from './Component'

function App() {

  // let[c,setC] = useState(0)
  // let[show,setShow] = useState(false)

  // useEffect(()=>{alert("called")},[c,show])
  
  return (
    <>
    <Comp />
    {/* <h1>{c}</h1>
    <h1>{show}</h1>
    <button onClick={()=>setC(c+1)}>Inc</button>
    <button onClick={()=>setShow(!show)}>change</button> */}
    </>
  )
}

export default App
