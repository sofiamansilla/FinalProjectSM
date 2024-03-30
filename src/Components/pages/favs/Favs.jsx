import React from "react";
import { DentistCard } from "../../common/dentistCard/DentistCard";
import { useDentistStates } from "../../../Context";
import "./favs.styles.css";


/**
 * @return {ReactComponent} Componente que muestra a los dentistas marcados como favoritos y los elimina
 */
export const Favs = () => {
  const {state, dispatch} = useDentistStates();

  return (
    <div  className="favorites">
      <h1>Listado de dentistas favoritos</h1>
      <div className="container-cards">
        {
          state.favs.map((dentist)=>{
            return(
              <DentistCard dentist={dentist} remove={true} key={dentist.id}/>
            )
          })
        }
      </div>
    </div>
  )
}
