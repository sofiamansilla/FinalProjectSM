import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.styles.css"
import { useDentistStates } from '../../../Context/DentistContext'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export const Navbar = () => {

const {state, dispatch} = useDentistStates()

  return ( 
   <nav className={"navbar"}>

        <ul>
          
          <li>  
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/Contact">Contacto</Link>
          </li>
          <li>
            <Link to="/Favs">Favoritos</Link>
          </li>
               
          
        </ul>

        <button 
          alt="Botón para cambiar modo claro-oscuro" 
          onClick={
            ()=> dispatch({type: "CHANGUE_MODE"})
          }>
            Cambiar modo
        </button>
        
 
        
   
    </nav>
  )
}

