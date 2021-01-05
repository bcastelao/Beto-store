import React from 'react';
import ItemList from '../ItemList/ItemList';
//function ItemListContainer(props) {
    const ItemListContainer = ({titulo}) => {
    return (
      <>
          <h1>{titulo}</h1>
          <section className="ItemListContainer">
            <ItemList/>
          </section>
      </>
    );
  }
  
  export default ItemListContainer;
  