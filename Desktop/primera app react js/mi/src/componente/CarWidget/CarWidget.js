import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";

const  CartWidget = () =>{


    const { totalQuantity } = useContext(CartContext)

    return(
        
             <Link to='/cart'  className="home" >
                     <div  className="estilo1">  
                     
                        <i class="large material-icons" >add_shopping_cart</i>
                            <span>{totalQuantity}</span>
                            
                     </div>
                </Link>
        
    )
}

export default CartWidget;