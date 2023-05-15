import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemListContainer/ItemCount";

export const ItemDetail = ({detalles,id,stock,onAdd}) => {
    return(
        <>
        <div className="detallesDelProducto">
            
            <header className="content">
                <h1>{detalles.nombre}</h1>
            </header>
            
            <picture className="img-de-prod">
                <img src={detalles.img}  />
            </picture>

            <section className="p">
                <p>
                    Precio: ${detalles.precio}
                </p>

                <p>
                    Categoria: {detalles.categoria}
                </p>

            </section>
            
            <footer>
                
                <ItemCount stock={detalles.stock} iniciador={1} onAdd={(cantidad) =>  console.log(`Compraste ${cantidad} unidades`)}/>

            </footer>
        </div>
        </>
    )
    
}

export default ItemDetail;