import React from "react";
import ItemCount from "../ItemListContainer/ItemCount";


export const ItemDetail = ({detalles}) => {
    return(
        <>
        <div className="detallesDelProducto">
            
            <header className="content">
                <h1>{detalles.nombre}</h1>
            </header>
            
            <picture>
                <img src={detalles.img}  />
            </picture>

            <section>
                <p>
                    Precio: ${detalles.precio}
                </p>

                <p>
                    Categoria: {detalles.categoria}
                </p>

            </section>
            
            <footer>
                
                <ItemCount stock={detalles.stock} iniciador={1} onAdd={detalles.onAdd}/>

            </footer>
        </div>
        </>
    )
    
}

export default ItemDetail;