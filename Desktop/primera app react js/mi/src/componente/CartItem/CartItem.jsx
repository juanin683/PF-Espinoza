import { useContext } from 'react';
import { CartContext} from '../../CartContext/CartContext'


export const CartItem = ({id, nombre, precio, img, categoria,quantity, stock}) => {
   const { removeItem} = useContext(CartContext);

    return(
        <div>
            <img src={img} alt="imagen-de-producto" />
            <p>TiTulo {nombre}</p>    
            <p>Precio ${precio}</p>    
            <p>Cantidad {quantity}</p>    
            
            <p>Subtotal: {quantity * precio}</p>
            <button onClick={() => removeItem(id)}> X </button>        
        </div>
    )
}

export default CartItem;