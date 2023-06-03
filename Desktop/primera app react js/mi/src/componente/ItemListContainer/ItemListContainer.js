import ItemList from "./ItemList";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getDoc,collection,query,where} from 'firebase/firestore'
import { db } from '../../service/firebase/firebaseConfig'




const  ItemListContainer = () =>{
    const [productos,setProductos] = useState([])

    const category = useParams()


    useEffect(() =>{

        const collectionRef = category
        ? query(collection(db,'Productos'),where('category', '==',category))
        : collection(db, 'Productos')


        getDoc(collectionRef)
        .then((res) =>{
            const productsAdapted = res.doc.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data} 
            })

            setProductos(productsAdapted)
        })
    }, [category])


    return(
        <>
        <div>
            <h1 className="Titulo">
                Dark Phone
            </h1>

            <h2 className="Subtitulo"> Tu lugar de equipos y componentes electronicos</h2>
            
            <ItemList productos= {productos}/>
        </div>
        </>
    )
}

export default ItemListContainer;