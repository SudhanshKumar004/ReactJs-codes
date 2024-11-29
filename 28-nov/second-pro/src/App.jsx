import { createElement, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let name = "Sudhansh"
  let obj ={
    city : "Bhopal",
    age : 24
  }
  return (
    <>
      <h1>Name is {name}</h1>

      <h2>{obj.age}</h2>
      <h2>{obj.city}</h2>
    </>
  )
}

export default App
