import React from 'react'
import {Link, Outlet} from "react-router-dom"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export const Navbar = () => {

  return (
   
   <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

        <ul>
          
          <li>  
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Detail">Detail</Link>
          </li>
          <li>
            <Link to="/Favs">Favs</Link>
          </li>
               
          
        </ul>

        <button>Change theme</button>

          <Outlet/>
        
   
    </nav>
  )
}

