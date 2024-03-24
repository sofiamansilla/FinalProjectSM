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
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  )
}
