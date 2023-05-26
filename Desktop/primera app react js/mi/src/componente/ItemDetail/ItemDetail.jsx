import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext/CartContext";
import CartItem from "../CartItem/CartItem";
import "./ItemDetail.css";
import ItemCount from "../ItemListContainer/ItemCount";

export const ItemDetail = ({detalles,id,nombre, precio, stock}) => {

    const [irACarrito, setIrACarrito] = useState(false);
    const {addItem} = useContext(CartContext)

    const onAdd = (cantidad) =>{
        setIrACarrito(cantidad)

        const item = {
            id,nombre,precio
        }

        addItem(item, cantidad)
    }

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
                {
                    irACarrito 
                    ? <Link to='/cart' className="option"> Terminar mi compra</Link>
                    :<ItemCount stock={detalles.stock} iniciador={1} onAdd={onAdd}/>
                }
                

            </footer>
        </div>
        </>
    )
    
}

export default ItemDetail;