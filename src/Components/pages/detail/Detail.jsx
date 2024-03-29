import React, { useState, useEffect } from 'react'
import {useParams} from "react-router-dom";
import { ButtonReturnHome } from '../../common'
import { getDentistById } from '../../../services';



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export const Detail = () => {
 
  const {id} = useParams()
  const [dentistSelected, setDentistSelected] = useState(null)

  useEffect( ()=>{
    getDentistById(id).then(res => setDentistSelected(res))
  }, [])

  console.log(dentistSelected);

  if(dentistSelected==null){
    return;
  }


  return (
    <>
      <h1>Nombre: 
        {dentistSelected.name}
      </h1>
      <h2>Sitio web: 
        {dentistSelected.website}
      </h2>
      <h2>Email:  
        {dentistSelected.email}
      </h2>
      <h2>Telefono: 
        {dentistSelected.phone}
      </h2>
      <h2>Ciudad: 
        {dentistSelected.address.city}
      </h2>  
      <h2>Compañia: 
        {dentistSelected.company.name}
      </h2>
      
    <ButtonReturnHome/>

    </>

    
  )
}