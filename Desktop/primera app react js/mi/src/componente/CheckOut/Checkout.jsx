import { addDoc, collection, doc, documentId, getDocs, query, where } from "firebase/firestore"
import { db }from '../../service/firebase/firebaseConfig'
import { useState } from "react"
import { CartContext } from "../../CartContext/CartContext"
import { useContext } from "react"
import CheckoutForm from './Checkoutform'
import Cart from "../Cart/Cart"
import { writeBatch } from "firebase/firestore"
import { Timestamp } from "firebase/firestore"


const Checkout = () => {
    const { cart, clearCart, totalPrecio} = useContext(CartContext)


    const  [ordenId, setOrdenId] = useState('')

    const crearOrden = async ({nombre, telefono, email}) =>{
        const objetoOrden = {
        comprador: [
            
            nombre,telefono,email
            
        ],
        items: cart,
        total: totalPrecio(),
        date: Timestamp.fromDate(new Date())
    
        }


        const batch = writeBatch(db)
        const outOfStock = []
    
        const ids = cart.map(prod => prod.id)
    
        const productsRef = collection(db, 'Productos')
    
        const productsAddedFromFirestore = await getDocs(query(productsRef,where(documentId(), 'in',ids)))
        
        const { docs } = productsAddedFromFirestore

        docs.forEach(doc => {
            const dataDoc = doc.data()
            const stockDb = dataDoc.stock

            const productsAddedToCart = cart.find(prod => prod.id === doc.id)
            const prodQuantity = productsAddedToCart?.quantity

            if (stockDb>=prodQuantity) {
                batch.update(doc.ref,{stock:stockDb-prodQuantity})
                
            } else {
                outOfStock.push({id: doc.id,...dataDoc})
            }
            
        });

        if (outOfStock.length === 0) {
            await batch.commit()
            const orderRef = collection(db, 'orders')
    
            const orderAdded = await addDoc(orderRef,objetoOrden)
    
            setOrdenId(orderAdded.id)
            clearCart()
        } else {
            console.log('Hay productos fuera de stock')
        }
    }



    if (ordenId) {
        return <h1> El ID de su orden es: {ordenId}</h1>
    }
    
    return(
        <div>
          <h1> Checkout </h1>
          <CheckoutForm onConfirm = {crearOrden}/>
        </div>
    )


}

export default  Checkout ;