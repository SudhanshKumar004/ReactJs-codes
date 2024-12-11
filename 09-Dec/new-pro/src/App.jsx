import Child1 from "./child.jsx"

let a = prompt(" Enter a Name : ")
let b = prompt(" Enter age : ")

function App() {

  return (
    <>
      <Child1 Name= {a} />
      <Child1 age= {b} />

    </>
  )
}

export default App
