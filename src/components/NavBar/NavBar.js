import React from 'react';
import './NavBar.css';
import logo from '../../logo.png';
import CartWidget from '../CartWidget/CartWidget';
const NavBar = () => {
//function NavBar() {
/*
Para hacer algo similar con las props en componentes tipo funcion
useState es un hook 
const React.useState()
const valor=React.useState("test");
const setTitulo= valor[1]
const titulo = valor[0] ===> todo en una linea seria:
const [titulo, setTitulo] = React.useState("test")
*/  
    const [items, setItems] = React.useState(0)
    const cambiarItem = () =>{
        setItems(items+1)
    }
    return (
      <>
      <header>
      <div className="container"> 
      <a href={"https://www.globant.com/"}><img src={logo} alt={"Hola"} className="logo" /></a> 
      < CartWidget itemCount={items}/>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse Menu" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href={"https://www.globant.com/"}><span></span>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={"https://www.globant.com/"}><span></span>Nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={"https://www.globant.com/"}><span></span>Catalogo</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={"https://www.globant.com/"}><span></span>Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>        
        
      </div>
      </header>
      <button className="CartCTA my-transition"  onClick={cambiarItem}>Agregar Al Carrito</button>
      </>
    );
  }
  
  export default NavBar;