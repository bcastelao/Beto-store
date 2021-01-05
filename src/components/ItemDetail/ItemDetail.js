import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import ItemList from './ItemDetail.css';
const ItemDetail = ({item}) => {

    return (
        <>
        <div className="col-lg-4 col-md-4 col-sm-12 pitureBlock">
        { item.pictureURL !=="" ? <img src={item.pictureURL} alt={item.title}/> : <img src="https://tekilaz.co/wp-content/uploads/2020/06/infamous-67532-poster-193x288.jpg" alt={item.title}/>}
            <ItemCount  stock={item.stock} initial={1}  />
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 descriptionBlock">
        <h2>{item.title}</h2>
                <p>{item.fullDescription}</p>
                <p className="precio">Precio: <span>${item.price}</span></p>
        </div>
        </>
    )
}

export default ItemDetail