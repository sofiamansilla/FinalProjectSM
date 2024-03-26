
import React, { useState } from 'react'
import './Form.style.css'
import { FormCard } from '../formCard'
import { validateEmail } from '../../../services/validateEmail'
import { validateFullName } from '../../../services/validateName'


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
    });
 

    const [showSuccess, setShowSuccess] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [showError, setShowError] = useState(false)

    const onChangeEmail = (e) => {
        setUser({
            ...user,
            email: e.target.value
        });

    }
    const onChangeName = (e) => {
        setUser({
          ...user,
          name: e.target.value
        });
        setHasError(false)
      }

    const handleSubmit = (e) => {
        e.preventDefault()
   
        if(!validateFullName(user.name)) {
            setHasError(true);
            setShowError(true);
            return;
        }
        if(!validateEmail (user.email)){
            setHasError(true);
            setShowError(false);
            return;
        }
    
    setShowSuccess(true);
    setShowError(false);

 
    };


  return (
    <div className='form-component'>
        {!showSuccess &&
            <form onSubmit={handleSubmit}>

                <input type="text" 
                    placeholder='name' 
                    onChange={onChangeName}
                    value={user.name}
                    className='input-name'
                />

                <input type="text" 
                    placeholder='email' 
                    onChange={onChangeEmail} 
                    value={user.email}
                    className='input-email'
                />
           
                <button type="submit">Enviar</button>
            
              
            </form>

            
        }
   

        {showSuccess ? (
            <p>
                Gracias {user.name}, te contactaremos cuanto antes al email {user.email}
            </p>
        ) : (
            <p>
                Ingresa tus datos para que podamos contactarte cuanto antes
            </p>
        )}
        
        {hasError && (
            <p style={{color: 'red'}}>
                Por favor verifique su información nuevamente
            </p>
        )}

    </div>
  );

};





