import React from 'react';
import './ItemCount.css';
//function ItemListContainer(props) {
    const ItemCount = ({stock, initial}) => {
      const [iteminit, setinitialItem] = React.useState(initial);
      const sumarItem = () =>{
        if (iteminit < stock) 
        setinitialItem(iteminit+1)
      }
      const restarItems = () =>{
        if (iteminit > 1)
        setinitialItem(iteminit-1)
        
      }
    return (
      <>
          <div className="ItemCount">
             <p>
             <button className="lessCta my-transition" onClick={restarItems}>-</button>
             <span>{iteminit}</span>
             <button className="plusCta my-transition" onClick={sumarItem}>+</button>
             </p>

          <button class="CartCTA my-transition">Agregar Al Carrito</button>
          </div>
      </>
    );
  }
  
  export default ItemCount;