import {Routes,Route} from 'react-router-dom'
import Home from './home'
import Contact from './contact'
import About from './about'
import Products from './products'
import Signin from './signin'
import View from './view'
import Cart from './cart'
import Viewcart from './viewcart'
import Buynow from './buynow'
function App() {


  return (
    <>
    <Home/>
    <br />
    <br />
    <br />
    <br />
    <br />
      <Routes>
          <Route path='/' element={<h1>Heading</h1>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/prod1/:id' element = {<View/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/viewcart' element={<Viewcart/>}/>
          <Route path='/buynow' element={<Buynow/>}/>
      </Routes>
      
    </>
  )
}

export default App
