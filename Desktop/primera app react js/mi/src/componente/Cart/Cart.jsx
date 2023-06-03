import { useContext } from "react"
import { CartContext } from "../../CartContext/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"


 const Cart = () => {
    const { cart, clearCart, totalPrecio} = useContext(CartContext)
    
    if (cart.length === 0 ) {
        return(
            <div>
                <h1> El carrito esta vacio</h1>
                <Link to='/'> Volver a la Tienda</Link>
            </div>
        )
    }  
    
    return(
        <div>
            {
                cart.map(p => <CartItem key={p} {...p}/>)
            }
            <h2> Total : $ {totalPrecio()}  </h2>
            <button onClick={() => clearCart()} className="boton-limpiar-carrito"> Limpiar Carrito</button>
        </div>
    )
}

export default  Cart ;