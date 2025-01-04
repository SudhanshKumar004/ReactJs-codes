import { useRef, useState } from 'react'
import './App.css'
import Box from './Box';

function App() {
  let refel = useRef("")
  console.log(refel);

  function change()
  {
    refel.current.innerHTML = "Hello from ref"
    refel.current.style.backgroundColor = "red";
  }
  return (
    <>
      <h1 ref={refel}>Hello From element</h1>
      <button onClick={change}>Click</button>
      <Box />
    </>
  )
}

export default App
