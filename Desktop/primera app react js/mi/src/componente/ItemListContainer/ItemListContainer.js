import ItemList from "./ItemList";
import React, { useState, useEffect } from "react";
import { getDatos, getDetalles } from "./Items";
import { useParams } from "react-router-dom";

const  ItemListContainer = () =>{
    const [productos,setProductos] = useState([])

    const category = useParams().categoria


    useEffect(() =>{
        getDatos()
        .then((res) =>{
            if (category) {
                setProductos(res.filter((product) =>product.categoria === category))
                
            } else {
                setProductos(res)
            }
        })
    }, [category])


    return(
        <>
        <div>
            <h1 className="Titulo">
                Dark Phone
            </h1>

            <h2 className="Subtitulo"> Tu lugar de equipos y componentes electronicos</h2>
            
            <ItemList productos= {productos}/>
        </div>
        </>
    )
}

export default ItemListContainer;