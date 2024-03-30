
import React, { useState } from 'react'
import './Form.style.css'
import { validateEmail } from '../../../services/validateEmail'
import { validateFullName } from '../../../services/validateName'


/**
 * 
 * @return {React.Component} Formulario con dos inputs y un botón submit para ingresar nombre y email, con llamadas a validaciones
 */

export const Form = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
    });
 


    const [hasError, setHasError] = useState(false)
    const [isSent, setIsSent] = useState(false)



    const onChangeEmail = (e) => {
        setUser({
            ...user,
            email: e.target.value
        });
        setHasError(false)
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
            return;
        }
        if(!validateEmail (user.email)){
            setHasError(true);
            return;
        }
        setIsSent(true);
    };

    const showContactMsg = !hasError && !isSent;
    const showSuccess = !hasError && isSent;


  return (
    <div className='form-component'>

        {
        showContactMsg && <div className='contact-msg'>
            <strong>
             ¿Necesitas más información?
            </strong>
            <p>
                Ingresa tus datos y te escribiremos lo más pronto posible
            </p>
        </div>
        }

        {
            hasError &&
            <div className='contact-msg '>
                            <p style={{color: 'red'}}>
                Por favor verifique su información nuevamente
            </p>
            </div> 
        }

        {
           showSuccess &&          
              <div className='contact-msg '>
            <strong>
            Gracias {user.name}, te contactaremos cuanto antes vía e-mail!
            </strong>
       </div> 
        }
    
        {!isSent &&
            <form onSubmit={handleSubmit}>

                <input type="text" 
                    placeholder='Ingresa tu nombre aquí' 
                    onChange={onChangeName}
                    value={user.name}
                />

                <input type="text" 
                    placeholder='Ingresa tu email aquí' 
                    onChange={onChangeEmail} 
                    value={user.email}

                />
           
                <button type="submit" alt="Enviar">Enviar</button>
            
              
            </form>
        }


    </div>
  );

};





