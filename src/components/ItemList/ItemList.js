import React, { useState, useEffect }  from 'react';
import './ItemList.css';
import { itemDetails } from './ItemArray';
import Item from '../Item/Item';
import Loader from '../Loader/Loader'
//function ItemListContainer(props) {
    const ItemList = () => {
        let [items, setItem] = useState([]);
       
    useEffect(() => {
        setTimeout(() =>{
            const promise = new Promise((resolve, reject) => {
                resolve(itemDetails);
            });
            promise.then(itemDetails => {
                setItem(itemDetails);
            })
        }, 3000)
        console.log(items)
    })  
    return (
      <>
            <div className="container">
            {items.length === 0
                ?<Loader/> : (
                    <div>
                    {items.map((e, i) => {
                        return (
                            <Item 
                            key={e.id}
                            id={e.id}
                            title={e.title}
                            description={e.description}
                            price={e.price}
                            pictureURL={e.pictureURL}
                            stock={e.stock}
                        />
                        )
                        
                    })}
                    </div>
                )
            }
           


            
            </div>
      </>
    );
  }
  
  export default ItemList;