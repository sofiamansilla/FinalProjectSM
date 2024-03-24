import React from 'react'
import { useEffect, useState } from 'react'
import { DentistCard } from '../common/DentistCard';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export const Home = () => {

  const [dentists, setDentists] = useState([]) //Array que almacenara los dentistas obtenidos desde la API

  useEffect(()=>{

    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(res => setDentists(res))
  }, [])
  
  console.log(dentists);
  
  return (
    <div style={{
      display: "flex",
      flexWrap:"wrap",
      justifyContent: 'space-evenly',
      alignItems: "center",
      gap: "30px",
      width: "100%"
    }}>

      {dentists.map((dentist)=>{
          return (
            <DentistCard dentist={dentist} key={dentist.id}/>
          );
        })}
    </div>
  );
};
