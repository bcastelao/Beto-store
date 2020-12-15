import React from 'react';
import './CartWidget.css';
import carrito from '../../img/carrito.png';
//function CartWidget() {
    const CartWidget = ({itemCount}) => {
    
    return (
      <div className="CartWidget">
          <img src={carrito} alt={"Hola"} className="logo" />
            <span>{itemCount}</span>
      </div>
    );
  }
  
  export default CartWidget;