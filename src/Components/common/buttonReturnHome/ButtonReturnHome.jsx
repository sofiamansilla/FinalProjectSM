import React from 'react'
import {Link} from "react-router-dom"
import "./ButtonReturnHomeStyles.css"

export const ButtonReturnHome = () => {
  return (
    <Link to="/">
      <button>
        Volver a la página de inicio
      </button>
    </Link>
  )
};



