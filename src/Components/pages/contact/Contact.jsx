import React from 'react'
import { Form } from '../../common/form/Form'
import "./Contact.styles.css"

/**
 * 
 * @return {ReactComponent} Componente que despliega un formulario  de contacto con campos para el nombre y email
 */

export const Contact = () => {
  return (
    <div className='contact-text'>
      <strong>¿Necesitas más información?</strong>
      <p>Ingresa tus datos y te escribiremos lo más pronto posible</p>

      <Form/>


    </div>
  )
}
