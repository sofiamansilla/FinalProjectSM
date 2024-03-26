import React from "react";
import './FormCard.style.css';

/**
 * 
 * @param {*} param0 
 * @return {React.Component} A react component that displays a card  with the given game and console.
 */
export const FormCard = ({
  name,
  email,
}) => {
  return (
    <div className="form-card">
    
  <p>Gracias { name }, te contactaremos cuanto antes al email { email } </p>
  
</div>


  )

}

