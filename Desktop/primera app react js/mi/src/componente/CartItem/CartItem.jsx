import { useContext } from 'react';
import { CartContext} from '../../CartContext/CartContext'
import '../Cart/Cart.css'

export const CartItem = ({id, nombre, precio, img, categoria,quantity, stock}) => {
   const { removeItem} = useContext(CartContext);

    return(
        <div className='container-item'>
              
        
              <p>Titulo:  <br />{nombre}</p>
              <p>Precio:  <br />{precio}</p>
              <p>Cantidad:  <br />{quantity}</p>
              <p>Subtotal:  <br />{quantity * precio}</p>
            <div >

            <button className='boton-borrar-item'onClick={() => removeItem(id)}> X </button>
            </div>
                    
            
        </div>
    )
}

export default CartItem;