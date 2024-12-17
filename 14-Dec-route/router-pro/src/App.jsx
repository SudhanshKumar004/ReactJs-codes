import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Service from './Service'
import Layout from './Layout'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/service" element={<Service/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
