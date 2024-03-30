import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './navbar'
import { Footer } from './footer'
import './layout.styles.css'
import { useDentistStates } from '../../Context/DentistContext'

/**
 * 
 * @return {ReactComponent} Layout de la aplicación, genera el cambio de tema.
 */
export const Layout = () => {

  const {state, dispatch} = useDentistStates()

  const darkModeClass = state.darkMode ? "layout-dark" : "layout";

  return (
    <div className={darkModeClass}>
        
      <Navbar/>
        <div className="layout-body">
          <Outlet/>
        </div>
      <Footer/>

    </div>
  )
}
