import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext/CartContext";
import CartItem from "../CartItem/CartItem";
import "./ItemDetail.css";
import ItemCount from "../ItemListContainer/ItemCount";
import Cart from "../Cart/Cart";

export const ItemDetail = ({ detalles }) => {
    const [irACarrito, setIrACarrito] = useState(false);
    const { addItem } = useContext(CartContext);
  
    const { id, nombre, precio, img, categoria, stock } = detalles;
  
    const onAdd = (quantity) => {
      setIrACarrito(quantity);
  
      console.log(id, precio, nombre, quantity);
  
      const item = { id, nombre, precio };
  
      addItem(item, quantity);
    };
  
    return (
      <>
        <div className="detallesDelProducto">
          <header className="content">
            <h1>{nombre}</h1>
          </header>
  
          <picture className="img-de-prod">
            <img src={img} alt={`Imagen del producto ${nombre}`} />
          </picture>
  
          <section className="p">
            <p>Precio: ${precio}</p>
  
            <p>Categoria: {categoria}</p>
          </section>
  
          <footer>
            {irACarrito ? (
              <Link to="/cart" className="option">
                {" "}
                Terminar mi compra
              </Link>
            ) : (
              <ItemCount stock={stock} iniciador={1} onAdd={onAdd} />
            )}
          </footer>
        </div>
      </>
    );
  };
  
  export default ItemDetail;