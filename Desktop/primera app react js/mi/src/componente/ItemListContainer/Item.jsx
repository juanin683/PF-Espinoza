import React from "react";
import { Link } from "react-router-dom";

import './Item.css'
import { getDatos } from "./Items";
import Button from "./Button";
import ItemDetail from "../ItemDetail/ItemDetail";
import { CartContext } from "../../CartContext/CartContext";

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
            <Link className="boton-info" to={`/item/${detalleDelItem.id}`}> <h1> Ver mas</h1></Link>
        </footer>
        </div>
        </>
    )
}

export default Item;

