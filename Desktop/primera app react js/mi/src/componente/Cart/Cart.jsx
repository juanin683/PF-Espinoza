import { useContext } from "react"
import { CartContext } from "../../CartContext/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"


export const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)
    
    if (totalQuantity === 0 ) {
        return(
            <div>
                <h1> El carrito esta vacio</h1>
                <Link to='/'> Mis Productos</Link>
            </div>
        )
    } 
    return(
        <div>
            {cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h2> Total : ${total}</h2>
            <button onClick={() => clearCart()} className="boton-limpiar-carrito"> Limpiar Carrito</button>
        </div>
    )
}

export default  Cart ;