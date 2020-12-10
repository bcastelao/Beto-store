import React from 'react';
import './CartWidget.css';
import carrito from '../img/carrito.png';
function CartWidget() {
    return (
      <div className="CartWidget">
          <img src={carrito} alt={"Hola"} className="logo" />
      </div>
    );
  }
  
  export default CartWidget;