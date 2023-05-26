export const CartItem = ({id,nombre,precio,img,quantity}) => {
   
    return(
        <div>
            <img src={img} alt="" />
            <p>TiTulo {nombre}</p>    
            <p>Precio ${precio}</p>    
            <p>Cantidad {quantity}</p>    
            
                    
        </div>
    )
}

export default { CartItem };