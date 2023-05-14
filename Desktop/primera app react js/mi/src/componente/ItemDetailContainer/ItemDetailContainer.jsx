import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getDetalles } from '../ItemListContainer/Items';
import ItemDetail from '../ItemDetail/ItemDetail'

const  ItemDetailContainer = () =>{
    const [detalles,setDetalles] = useState([])

    const { itemConId } = useParams()


    useEffect(() =>{
        getDetalles(itemConId)

        .then(response => {
            setDetalles(response)
        
        })

        .catch(err=>{
            console.log(err)
        }
        )
    }, [itemConId])

    return(
        <>
        <div className='IDContainer'>
            <ItemDetail  {...detalles}/>
        </div>
        </>
    )
}

export default ItemDetailContainer;