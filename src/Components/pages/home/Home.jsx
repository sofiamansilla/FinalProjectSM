import React from 'react'
import { useEffect, useState } from 'react'
import { DentistCard } from '../../common/DentistCard';
import "./Home.style.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export const Home = () => {

  const [dentists, setDentists] = useState([]) //Array que almacenara los dentistas obtenidos desde la API

  useEffect(()=>{

    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(res => setDentists(res))
  }, [])
  
  
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
