import { Routes,Route } from 'react-router-dom'
import Counter from './Counter';
import './App.css'
import Show from './Show';
import Layout1 from './Layout1';


function App(){


  let name = "Sudhansh"
  let age = "24"
  return(
    <> 
      <Routes>
        <Route path='/' element={<Layout1 />}>
          <Route path='/counter' element={<Counter/>} />
          <Route path='/show' element={<Show fname={name} age1={age} />}/>
        </Route>
        </Routes> 
    </>
  )
}

export default App;