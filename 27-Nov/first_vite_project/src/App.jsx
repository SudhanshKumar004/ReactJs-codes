import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Service from './Pages/Service'
import Layout from './Layout'


function App(){


  return(
    <> 
      <Routes>
       <Route path='/' element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/service' element={<Service/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App;