import React from 'react';
import './NavBar.css';
import logo from '../logo.png';
function NavBar() {
    return (
      <header>
      <div className="container"> 
      <a href={"https://www.globant.com/"}><img src={logo} alt={"Hola"} className="logo" /></a> 
      <nav className="Menu">
          
          <div className="Menu-container">
            <ul>
                <li><a href={"https://www.globant.com/"}><span></span>Home</a></li>
                <li><a href={"https://www.globant.com/"}><span></span>Nosotros</a></li>
                <li><a href={"https://www.globant.com/"}><span></span>Catalogo</a></li>
                <li><a href={"https://www.globant.com/"}><span></span>Contact Us</a></li>
            </ul>
          </div>          
      </nav>
      </div>
      </header>
    );
  }
  
  export default NavBar;