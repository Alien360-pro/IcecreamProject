import { Link } from "react-router-dom"
import logo from './assets/logo.png'
function Home(){

    return <>
        <nav className="navbar bg-body-tertiary fixed-top">
  <div className="container-fluid">
    {/* <h1 class="navbar-brand" href="#" style={{fontStyle:"italic"}}>V.V.K</h1> */}
    <a href="/"><img src={logo} alt="logo" width={100} height={100} /></a>
    <li className="nav-item" type="none">
            <Link to="/signin"><button type="button" class="btn btn-warning">Sign In</button></Link>
          </li>
          <li className="nav-item" type="none">
            <Link to="/viewcart"><button type="button" class="btn btn-warning">View To Cart</button></Link>
          </li>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">V.V.K</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/" >Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/signin"><button type="button" className="btn btn-warning">Sign In</button></Link>
          </li>
        </ul>
        
      </div>
    </div>
  </div>
</nav>
        
    </>
}
export default Home