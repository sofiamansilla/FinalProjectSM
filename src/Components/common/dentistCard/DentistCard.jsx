import React from "react";
import {Link} from "react-router-dom"
import './DentistCard.styles.css'
import { useDentistStates } from "../../../Context";


/**
 * @return {React.Component}  Componente que muestra la card del dentista con los atributos nombre, nombre de usuario e id
 */
export const DentistCard = ({dentist, remove}) => {
 
  const {state, dispatch} = useDentistStates();

  const darkModeClass = state.darkMode ? "layout-dark" : "layout";
  
  const onClickFavHandler=()=>{
    dispatch ({
      type:"ADD_FAVORITE",
      payload: dentist
    })
  }

  const onClickRemoveHandler=()=>{
    dispatch ({
      type:"REMOVE_FAVORITE",
      payload: dentist
    })
  }

  return (

    <div className="dentistCard-component">
      
      <div className="image-container">
        <img
          src="/images/doctor.jpg"  alt={`Foto de ${dentist.name}`}
        />
        
        {
          remove === true ? 
            <img 
              onClick={onClickRemoveHandler} className="icon-remove"
              src="/images/ico-remove.png" 
              alt="Quitar de favoritos" 
            /> :
            <img 
              onClick={onClickFavHandler} className="icon-favs"
              src="/images/ico-star.png" 
              alt="Agregar a favoritos" 
            />
        }
      </div>
    
      <div  className="info-container">
        <span className="dentist-name">{dentist.name}</span>
        <span className="dentist-username">{dentist.username}</span>
      </div>
     
     <div className="dentistCard-footer">
        <Link to={`/Dentist/${dentist.id}`}>
          <button>
          Ver información del profesional
          </button>
        </Link>
      </div>
      
    </div>
  );
}