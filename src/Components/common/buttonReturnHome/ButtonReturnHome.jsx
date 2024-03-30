import React from 'react'
import {Link} from "react-router-dom"
import "./ButtonReturnHomeStyles.css"

/**
 * 
 * @returns {React.Component} Button to return home page
 */

export const ButtonReturnHome = () => {
  return (
    <Link to="/">
      <button>
        Volver a la página de inicio
      </button>
    </Link>
  )
};



