import { Link } from "react-router-dom"
import logo from './assets/logo.png'
function Home(){

    return <>
        <nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
    {/* <h1 class="navbar-brand" href="#" style={{fontStyle:"italic"}}>V.V.K</h1> */}
    <a href="/"><img src={logo} alt="logo" width={100} height={100} /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">V.V.K</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <Link class="nav-link" aria-current="page" to="/" >Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/contact">Contact</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/products">Products</Link>
          </li>
        </ul>
        
      </div>
    </div>
  </div>
</nav>
        
    </>
}
export default Home