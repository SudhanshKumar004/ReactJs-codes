
import { useState } from 'react'
import './App.css'
import Bg from './Bg'
import TF from './TF'
import TF2 from './TF2'
import Theme from './Theme'
import Count from './Count'

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
    {/* <TF2/> */}
  {/* <TF /> */}

  {/* <h1>{count}</h1>
  <button onClick={add}>+</button>
  <button onClick={del}>-</button> */}

  {/* <Bg /> */}
  {/* <Theme /> */}
  <Count /> 
    </>
  )
}

export default App

