import { createContext } from 'react'
import './App.css'
import Child1 from './Child'


let fdata = createContext();
let data = "New Year"

function App() {
  return (
    <>
    <fdata.Provider value={data}>
  <Child1 />
    </fdata.Provider>
    </>
  )
}

export default App
export {fdata}
