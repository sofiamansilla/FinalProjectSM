import React from 'react'
import { useEffect, useState } from 'react'
import "./Home.style.css"
import { DentistCard } from '../../common/dentistCard';
import { getAllDentist } from '../../../services/getElementsApi';

/**
 * 
 * @return {ReactComponent} Componente inicio que muestra a todos los dentistas
 */

export const Home = () => {

  const [dentists, setDentists] = useState([])

  useEffect(()=>{

    getAllDentist().then(res=>setDentists(res))

  }, [])

  console.log(dentists);
  
  if(dentists==null){
    return;
  }

  
  return (
    <div className='container-cards'>

      {dentists.map((dentist)=>{
          return (
            <DentistCard dentist={dentist} key={dentist.id}/>
          );
        })}
    </div>
  );
};
