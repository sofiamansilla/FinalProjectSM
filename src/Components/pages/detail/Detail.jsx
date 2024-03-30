import React, { useState, useEffect } from 'react'
import {useParams} from "react-router-dom";
import { getDentistById } from '../../../services';
import './Detail.styles.css'



/**
 * 
 * @return {ReactComponent} Renderiza los datos individuales de cada dentista 
 */

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
    <div className='detail-card'>
      <div className='detail-container'>
        <div className='info-container'>
          <strong>Nombre:
            <br/> 
            <span>
              {dentistSelected.name}
            </span>
          </strong>

          <strong>Sitio web:
            <br/> 
            <span>
              {dentistSelected.website}
            </span>
          </strong>
          
          <strong>Email: 
            <br/> 
            <span>
              {dentistSelected.email}
            </span>
          </strong>
          
          <strong>Telefono: 
            <br/>
            <span>
              {dentistSelected.phone}
            </span>
          </strong>
          
          <strong>Ciudad: 
            <br/>
            <span>
              {dentistSelected.address.city}
            </span>
          </strong> 
          
          <strong>Compañia: 
            <br/>
            <span>
              {dentistSelected.company.name}
            </span>
          </strong>
        </div>
      </div>    
    </div>
  );
};