import React from 'react'
import { useEffect, useState } from 'react'
import "./Home.style.css"
import { DentistCard } from '../../common/dentistCard';
import { getAllDentist } from '../../../services/getElementsApi';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export const Home = () => {

  const [dentists, setDentists] = useState([]) //Array que almacenara los dentistas obtenidos desde la API

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
