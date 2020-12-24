import React, { useState, useEffect }  from 'react';
import './ItemDetailContainer.css';
import ItemCount from '../ItemCount/ItemCount';
//function ItemListContainer(props) {
    const ItemDetailContainer = () => {

        const [item, setItem] = useState([]);

        useEffect(() => {
            setTimeout(() =>{
                const arrayItems = fetch("info.json")
                arrayItems.then(itemDetails => {
                    return itemDetails.json()
                })
                .then(itemDetails => {
                    setItem(itemDetails[0])
                })
            }, 3000)
        },[])

       
        return(
            <div>
                {item ? (
                    <section className="ItemDetailContainer">
                        <div className="container">
                       
                            <div className="col-lg-4 col-md-4 col-sm-12 pitureBlock">
                            { item.pictureURL !=="" ? <img src={item.pictureURL} alt={item.title}/> : <img src="https://tekilaz.co/wp-content/uploads/2020/06/infamous-67532-poster-193x288.jpg" alt={item.title}/>}
                                <ItemCount  stock={item.stock} initial={1}  />
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-12 descriptionBlock">
                            <h2>{item.title}</h2>
                                    <p>{item.fullDescription}</p>
                                    <p className="precio">Precio: <span>${item.price}</span></p>
                            </div>

                        </div>
                    </section>
            
                ) : (
                <p>Cargando...</p>
                )}
            </div>
            );
  }
  
  export default ItemDetailContainer;