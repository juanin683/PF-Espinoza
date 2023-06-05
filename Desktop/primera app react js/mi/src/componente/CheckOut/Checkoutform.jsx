import { useState } from "react"




const Checkoutform =  ({onConfirm}) => {
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')


    const handleConfirm = (event)=> {
       event.preventDefault()

       const datosUser = {
        nombre, telefono, email
       }


       onConfirm(datosUser)
    }


    
    return(
        <div>
          <form onSubmit={handleConfirm}>
            <label htmlFor="">
                Nombre
                <input type="text"
                 value={nombre}
                onChange={({target}) => setNombre(target.value)}
                
                
                
                />
            </label>

            <label htmlFor="">
                Telefono
                <input type="text"
                 value={telefono}
                onChange={({target}) => setTelefono(target.value)}
                
                
                
                />
            </label>

            <label htmlFor="">
                Email
                <input type="text"
                 value={email}
                onChange={({target}) => setEmail(target.value)}
                
                
                
                />
            </label>
            <div>
                <button type='submit'> Crear Orden</button>
            </div>
          </form>
        </div>
    )
}

export default  Checkoutform ;