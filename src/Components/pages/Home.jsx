import React from 'react'
import { useEffect, useState } from 'react'
// import Card from '../Components/Card'

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
    <div>
      {
        dentists.map((dentist)=>{
          return <div key= {dentist.id}>
            <h2>{dentist.name}</h2>
            <h3>{dentist.username}</h3>
          </div>
        })
      }
    </div>
  );
};
