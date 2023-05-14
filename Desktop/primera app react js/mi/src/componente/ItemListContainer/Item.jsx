import React from "react";
import './Item.css'
import { getDatos } from "./Items";
import Button from "./Button";



 const  Item = ({detalleDelItem}) =>{
   

    return(
        <>
        <div className="item-container">
            <header className="titulo">
                <h1>{detalleDelItem.nombre}</h1>
            </header>

        <picture className="celular">
            <img src={detalleDelItem.img} alt="" srcset="" />
        </picture>
        <section>
            <p className="informacion">
                Precio: ${detalleDelItem.precio}
            </p>

            <p className="informacion">
                Stock: {detalleDelItem.stock}
            </p>
        </section>
        <footer className="contenedor-boton-info">
            <Button
            className="boton-info"
            text="Ver Información"
            />
        </footer>
        </div>
        </>
    )
}

export default Item;

