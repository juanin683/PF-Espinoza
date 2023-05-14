import Item from "./Item";
import React from "react";


const  ItemList = ({productos = []}) =>{


    return(
       productos.map(producto => <Item key={producto.id} detalleDelItem={producto}/>)
    )
}

export default ItemList;