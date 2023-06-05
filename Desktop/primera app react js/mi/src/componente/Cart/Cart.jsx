import { useContext } from "react"
import { CartContext } from "../../CartContext/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import Checkout from "../CheckOut/Checkout"
import Checkoutform from "../CheckOut/Checkoutform"


 const Cart = ({nombre, telefono, email}) => {
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

            <Link to='/checkout'>Checkout</Link>
        </div>
    )
}

export default  Cart ;