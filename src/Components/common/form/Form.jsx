
import React, { useState } from 'react'
import './Form.style.css'
import { FormCard } from '../formCard'


/**
 * 
 * @return {React.Component} A form component with two inputs and a submit button
 * En esta pagina deberán implementar un [Form](/src/Components/Form.jsx) (con sus validaciones pertinentes) que capture la información del usuario que desea contactar con la empresa. Los campos serán los siguientes:

- Nombre completo (con longitud mayor a 5)
- Email (con formato correcto de email)
- En caso de haber un error mostrar el siguiente mensaje de error: **Por favor verifique su información nuevamente**
- Una vez "enviado"( no se envía a ningún servidor pero podemos mostrar por consola los datos submiteados) el formulario deberán mostrar un mensaje de éxito que contenga el siguiente formato: **Gracias _[nombre del usuario]_, te contactaremos cuando antes vía mail**

 */

export const Form = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
    })
 

    const [showSuccess, setShowSuccess] = useState(false)
    const [hasError, setHasError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
   
        if(user.name.length >= 5 && user.name[0]!=" "){
            setShowSuccess(true)
            setHasError(false)
        } else {
            setHasError(true)
        }
    }

    const onChangeName = (e) => {
        setUser({
            ...user,
            name: e.target.value
        })

    }

    const onChangeGame = (e) => {
        setUser({
            ...user,
            email: e.target.value
        })

    }


  return (
    <div className='form-component'>
        {!showSuccess &&
            <form onSubmit={handleSubmit}>

                <input type="text" 
                    placeholder='name' 
                    onChange={onChangeName}
                    value={user.name}
                />

                <input type="text" 
                    placeholder='email' 
                    onChange={onChangeGame} 
                    value={user.email}
                />
           
                <button>Enviar</button>
            
            </form>
        }
        {showSuccess ? 
            <>
                <FormCard name={user.name} email={user.email}/>           
            </>
        :   <p>Ingresa tus datos para que podamos contactarte cuanto antes</p>}
        {hasError ? 
            <p style={{color: 'red'}}>
                Por favor verifique su información nuevamente
            </p> 
        : null
        }

    </div>
  )
}

console.log(FormCard);
