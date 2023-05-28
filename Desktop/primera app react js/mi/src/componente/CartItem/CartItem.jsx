import { CartContext} from '../../CartContext/CartContext'


export const CartItem = ({productos}) => {
   const { removeItem} = CartContext();
    return(
        <div>
            <img src={productos.img} alt="" />
            <p>TiTulo {productos.nombre}</p>    
            <p>Precio ${productos.precio}</p>    
            <p>Cantidad {productos.quantity}</p>    
            
            <p>Subtotal: {productos.quantity * productos.precio}</p>
            <button onClick={() => removeItem(productos.id)}> X </button>        
        </div>
    )
}

export default { CartItem };