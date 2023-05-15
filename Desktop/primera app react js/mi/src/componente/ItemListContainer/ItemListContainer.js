import ItemList from "./ItemList";
import React, { useState, useEffect } from "react";
import { getDatos, getDetalles } from "./Items";
import { useParams } from "react-router-dom";

const  ItemListContainer = () =>{
    const [productos,setProductos] = useState([])

    const {categoriaId} = useParams()


    useEffect(() =>{
        
    const funcCategoria = categoriaId ? getDetalles : getDatos
        
    funcCategoria(categoriaId)
        .then(res =>{
            setProductos(res)
        })

        .catch(err => {
            console.log(err)
        })
        

        
    }, [categoriaId])


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