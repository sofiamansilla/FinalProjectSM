import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.styles.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export const Navbar = () => {

  return (
   
   <nav>

        <ul>
          
          <li>  
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Favs">Favs</Link>
          </li>
               
          
        </ul>

        <button>Change theme</button>
 
        
   
    </nav>
  )
}

