import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail'

import {doc,getDoc} from 'firebase/firestore'
import { db } from '../../service/firebase/firebaseConfig'


const  ItemDetailContainer = () =>{
    const [detalles,setDetalles] = useState([])

     const { itemConId } = useParams()


    useEffect(() =>{

        

        const queryDoc = doc(db, 'Productos', itemConId);
        getDoc(queryDoc)
        .then(res =>{
            const data = res.data()

            const productAdapted = { id: res.id, ...data}

            setDetalles(productAdapted)
        })

        .catch(error=>{
            console.log(error)
        })
        // getDetalles(itemConId)

        // .then(response => {
        //     setDetalles(response)
        
        // })

        // .catch(err=>{
        //     console.log(err)
        // }
        // )
    },[itemConId])

    return(
        <>
        <div className='IDContainer'>
            <ItemDetail  detalles={detalles}/>
        </div>
        </>
    )
}

export default ItemDetailContainer;