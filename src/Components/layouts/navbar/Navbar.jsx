import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.styles.css"
import { useDentistStates } from '../../../Context/DentistContext'

/**
 * 
 * @return {ReactComponent} Componente Navbar, barra de navegación, dirige a: Inicio, contacto y favoritos.
 */

export const Navbar = () => {

const {state, dispatch} = useDentistStates()

const darkModeClass = state.darkMode ? "layout-dark" : "layout";

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

        <img className='icon-theme' 
              onClick={()=> dispatch({type: "CHANGUE_MODE"})}
              src="/images/ico-color-theme.png" 
              alt="Cambiar tema" 
          /> 
   
    </nav>
  )
}

