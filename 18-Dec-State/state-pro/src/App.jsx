
import { useState } from 'react'
import './App.css'
import Bg from './Bg'
import TF from './TF'

function App() {

  let[count, setCounter] = useState(0)

  function add(){
    setCounter(count+1)
  }

  function del(){
    if(count>0){
    setCounter(count-1)
    }
  }


  return (
    <>
  <TF />

  <h1>{count}</h1>
  <button onClick={add}>+</button>
  <button onClick={del}>-</button>

  {/* <Bg /> */}
    </>
  )
}

export default App

