// import logo1 from './khushi.png'
 import { Link } from 'react-router-dom';
function Navbar(){
    return(
        
<nav class="navbar navbar-expand-lg navbar-light p-3 " style={{fontFamily:'Franklin Gothic Medium	'}}
>
  <Link class="navbar-brand fs-3 fw-bold text-warning" to="#">KHUSHI</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ">
    {/* <Link class="navbar-brand" to="#">
    <img src= {logo1}className="d-inline-block align-top w1"alt="  "/>
  </Link> */}
      <li class="nav-item active">
        <Link class="nav-link fw-bold " to="/">HOME</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link fw-bold" to="/about">ABOUT</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link fw-bold " to="/contact">CONTACT</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link fw-bold" to="/project">PROJECT</Link>
      </li>
    </ul>
  </div>
</nav>
    )
}
export default Navbar;