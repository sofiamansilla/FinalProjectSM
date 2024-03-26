import React from 'react'
import {Link} from "react-router-dom"

export const ButtonReturnHome = () => {
  return (
    <Link to="/">
      <button>
        Volver a la página de inicio
      </button>
    </Link>
  )
};



