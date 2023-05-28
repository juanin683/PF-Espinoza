import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext/CartContext";
import CartItem from "../CartItem/CartItem";
import "./ItemDetail.css";
import ItemCount from "../ItemListContainer/ItemCount";
import Cart from "../Cart/Cart";

const ItemDetail = ({detalles, stock}) => {

    const [irACarrito, setIrACarrito] = useState(0);

    const {addItem} = useContext(CartContext)

    const onAdd = (quantity) =>{
        setIrACarrito(quantity)

        const item = {
            detalles
        }

        addItem(item, quantity)
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
                    irACarrito > 0 ? (
                    <Link to='/cart' className="option"> Terminar mi compra</Link>
                    )
                    :(
                    <ItemCount stock={detalles.stock} iniciador={1} onAdd={onAdd}/>
                    )
                }
                

            </footer>
        </div>
        </>
    )
    
}

export default ItemDetail;