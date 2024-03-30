import React from 'react'
import { Form } from '../../common/form/Form'
import "./Contact.styles.css"
import { useDentistStates } from '../../../Context';

/**
 * 
 * @return {ReactComponent} Componente que despliega un formulario  de contacto con campos para el nombre y email
 */

export const Contact = () => {


  const {state, dispatch} = useDentistStates();

  const darkModeClass = state.darkMode ? "layout-dark" : "layout";

  return (
    <div className='contact-text'>
      

      <Form/>


    </div>
  )
}
