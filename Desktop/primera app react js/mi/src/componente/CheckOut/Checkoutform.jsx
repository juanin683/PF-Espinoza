import './Checkout.css'
import { useState } from "react"



const Checkoutform =  ({onConfirm}) => {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')

    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')


    const handleConfirm = (event)=> {
       event.preventDefault()

       const datosUser = {
        nombre,apellido, telefono, email
       }


       onConfirm(datosUser)
    }


    
    return(
        
        <>
          <form onSubmit={handleConfirm} className='form-container'>
            <label htmlFor=""className='label'>
                <p className='p-form'>Nombre</p>
                <input type="text"
                 value={nombre}
                onChange={({target}) => setNombre(target.value)}
                
                
                
                />
            </label>

            <label htmlFor="" className='label'>
                <p className='p-form'>Apellido</p>
                <input type="text"
                 value={apellido}
                onChange={({target}) => setApellido(target.value)}
                
                
                
                />
            </label>

            <label htmlFor="" className='label'>
                <p className='p-form'>Telefono</p>
                <input type="text"
                 value={telefono}
                onChange={({target}) => setTelefono(target.value)}
                
                
                
                />
            </label>

            <label htmlFor="" className='label'>
                <p className='p-form'>Email</p>
                <input type="text"
                 value={email}
                onChange={({target}) => setEmail(target.value)}
                
                
                
                />
            </label>

            
            
                <button className='boton-crear-orden'type='submit'> Crear Orden</button>
            


        
          </form>
          </>



        
    
    )
}



export default  Checkoutform ;