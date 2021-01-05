import React , { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader'

const details = [
    {
        "id":"P1",
        "title":"Los Croods: Una nueva era",
        "description":"Después de salir de su cueva, los Croods se encuentran con su mayor amenaza desde que se fueron",
        "price":25.4,
        "pictureURL":"https://tekilaz.co/wp-content/uploads/2020/12/los-croods-una-nueva-era-108514-poster-202x300.jpg",
        "fullDescription":"Los Croods 2: Una Nueva Era - 90% ahora dirigida ahora por Joel Crawford, vuelve a reunir a la dupla de guionistas conformada por Kirk DeMicco y Chris Sanders, directores y también guionistas de la primera entrega; en una nueva odisea en la cual tendrá un rol importante Guy (Alfonso Herrera), el joven humano más evolucionado quien se integró a la familia en el primer filme. Y esclarecerá algunos puntos de su pasado previo a unirse al clan.",
        "stock":5
     },
     {
        "id":"P2",
        "title":"Infamous",
        "description":"Arielle (Thorne) es una chica de un pueblo pequeño que sueña con hacerse famosa a toda costa. ",
        "price":30.4,
        "pictureURL":"https://tekilaz.co/wp-content/uploads/2020/06/infamous-67532-poster-193x288.jpg",
        "fullDescription":"Los Croods 2: Una Nueva Era - 90% ahora dirigida ahora por Joel Crawford, vuelve a reunir a la dupla de guionistas conformada por Kirk DeMicco y Chris Sanders, directores y también guionistas de la primera entrega; en una nueva odisea en la cual tendrá un rol importante Guy (Alfonso Herrera), el joven humano más evolucionado quien se integró a la familia en el primer filme. Y esclarecerá algunos puntos de su pasado previo a unirse al clan.",
        "stock":8
     },
     {
        "id":"P3",
        "title":"Honest Thief",
        "description":"Un atracador de bancos se entrega a la policía porque se ha enamorado y decide llevar una vida honrada. ",
        "price":25.4,
        "pictureURL":"https://tekilaz.co/wp-content/uploads/2020/12/honest-thief-107961-poster-193x288.jpg",
        "stock":12
     },
     {
        "id":"P4",
        "title":"A Rough Draft",
        "description":"La identidad de Kirill ha sido eliminada. Borrado de los recuerdos de todos aquellos que le rodean, Kirill se ve forzado a ejercer de guardián de una puerta que comunica mundos paralelos. ",
        "price":25.4,
        "pictureURL":"https://tekilaz.co/wp-content/uploads/2020/12/a-rough-draft-108611-poster-193x288.jpg",
        "stock":5
     }
]

const ItemDetailContainer = () => {

    const [item,setItem] = useState()
    const {id} = useParams()

    useEffect(()=>{

        let pedido = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(details)
            },2000)
        })

        pedido
        .then(res=>{
            if(id){
                setItem(res.filter(item=>item.id===id)[0])
            }
        })
        .catch(err=>{
            console.log(err)
        })

    },[id])

    return (
        <div>
             <section className="ItemDetailContainer">
                <div className="container">
                    {item
                ? <ItemDetail item={item}/> 
                : <Loader/>}
                </div>
            </section>    
           
        </div>
    )
}

export default ItemDetailContainer
/*import React, { useState, useEffect }  from 'react';
import './ItemDetailContainer.css';
import ItemCount from '../ItemCount/ItemCount';
//function ItemListContainer(props) {
    const ItemDetailContainer = () => {

       /* const [item, setItem] = useState([]);

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
*/
       
/*        return(
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
  */