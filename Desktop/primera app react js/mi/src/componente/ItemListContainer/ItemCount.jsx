import { useState } from "react";
import Button from "./Button";

export const  ItemCount = ({stock, iniciador, onAdd}) =>{
    const [botonNumero,setbotonNumero] = useState(iniciador)
    

    const suma = ( ) => {
        setbotonNumero(botonNumero + 1)

    }
    const resta = ( ) => {
        setbotonNumero(botonNumero - 1)
    }


    
    return(
    <>
        
         <div className="ButtonCount">
            <button className="ButtonCount1" 
            
            disabled={botonNumero <= 1}
            onClick={resta} > - </button>
            
            
           

        <span className="ButtonCountCero">{botonNumero}</span>
        
        <button  disabled={botonNumero >= stock}
        className="ButtonCount1" 
        text="+"
        onClick={suma}> + </button>
       
       
        
        {/* boton agregar al carrito */}
            <div>
                <Button
                disabled={stock<=0}
                onClick={() => onAdd(botonNumero)}
                className="ButtonAgregar" 
                text="Agregar al Carrito" 
            
                />
            </div>
        </div> 
    </>
    )
}

export default ItemCount;