import React from 'react';
import './Item.css';
//function ItemListContainer(props) {
import ItemCount from '../ItemCount/ItemCount';
    const Item = ({key,id,title,description,price,pictureURL,stock}) => {
        let Photo="https://tekilaz.co/wp-content/uploads/2020/12/MV5BYzZlYTEyNmItMmM2YS00ZjQxLWFhNmEtY2FkYWExZTVmYWU3XkEyXkFqcGdeQXVyMTM2MzgyOTU@._V1_SX3001-193x288.jpg"
        let initial=1;
        if(pictureURL!={}){
            Photo=pictureURL
        }
        
    return (
      <>
      <div className="Item col-lg-3 col-md-6 col-sm-12">
          <h2>{title}</h2>
          <img src={Photo} alt={title}/>
        <ItemCount stock={stock} initial={initial} />
        <div className="ItemDesc col-12 my-transition">
        <p>{description}</p>
        <span>$ {price}</span>    
        <button className="CartCTA my-transition">Ver Mas</button>
        </div>
      </div>

      </>
    );
  }
  
  export default Item;