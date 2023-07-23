
import {BrowserRouter,Routes, Route } from 'react-router-dom'
import HomeView from './views/HomeView'

function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>element
      <Route exact path='/' element={<HomeView/>}/>
      <Route  path='/home' element={<HomeView />}/>
      {/* <Route  path='/about-us' element={about}/>
      <Route  path='/contact' element={contact}/> */}
      </Routes>
    
    </BrowserRouter>
  
  </>
  )
}

export default App
