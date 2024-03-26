import React from 'react'
import { Form } from '../../common/form/Form'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export const Contact = () => {
  return (
    <div>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>

      <Form/>

    </div>
  )
}
