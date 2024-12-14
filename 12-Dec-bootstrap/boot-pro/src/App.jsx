import './App.css'
import Nav from './Navbar'
import Hero from './Hero'
import Comp from './Component'
import Card from './Card'
import Comp2 from './Component2'
function App() {

  return (
    <>
      <Nav />
      <h1 className='text-primary'>Welcome to Hevean</h1>  
      <Hero />
      <Comp />
      <Card />
      <Comp2 />
    </>
  )
}

export default App
