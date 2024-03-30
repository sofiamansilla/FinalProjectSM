import React, { useState, useEffect } from 'react'
import {useParams} from "react-router-dom";
import { getDentistById } from '../../../services';
import './Detail.styles.css'



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
    <div className='dentist-information'>
      <strong>Nombre: 
        <span>
          {dentistSelected.name}
        </span>
      </strong>

      <strong>Sitio web: 
        <span>
          {dentistSelected.website}
        </span>
      </strong>
      
      <strong>Email:  
        <span>
          {dentistSelected.email}
        </span>
      </strong>
      
      <strong>Telefono: 
        <span>
          {dentistSelected.phone}
        </span>
      </strong>
      
      <strong>Ciudad: 
        <span>
          {dentistSelected.address.city}
        </span>
      </strong> 
      
      <strong>Compañia: 
        <span>
          {dentistSelected.company.name}
        </span>
      </strong>

    </div>    
  );
};