import './App.css'
import Nav from './Navbar'
import Hero from './Hero'
import Comp from './Component'
import Card from './Card'
function App() {

  return (
    <>
      <Nav />
      <h1 className='text-primary'>Welcome to Bhopal</h1>  
      <Hero />
      <Comp />
      <Card />
    </>
  )
}

export default App
