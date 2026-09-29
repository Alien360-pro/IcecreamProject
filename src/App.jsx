import {Routes,Route} from 'react-router-dom'
import Home from './home'
import Contact from './contact'
import About from './about'
import Products from './products'
function App() {


  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}/>
      </Routes>
    </>
  )
}

export default App
