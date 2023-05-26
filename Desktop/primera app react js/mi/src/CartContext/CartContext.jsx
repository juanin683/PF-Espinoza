import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    console.log(cart)
    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {

            setCart(cart.map(prod => {
                return prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity}: prod
            }));
        
        } else {
            setCart([...cart, {...item,quantity}])   
        }
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id) => cart.find(prod => prod.id ===id) ? true : false;


    const removeItem = (id) => setCart(cart.filter(prod => prod.id !==id) ) 
        


    return(
        <CartContext.Provider value={{cart,addItem,removeItem,clearCart}}>
            {children}
        </CartContext.Provider>
    )
}
