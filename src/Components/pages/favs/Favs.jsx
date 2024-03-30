import React from "react";
import { ButtonReturnHome } from "../../common/buttonReturnHome";
import { DentistCard } from "../../common/dentistCard/DentistCard";
import { useDentistStates } from "../../../Context";
import "./favs.styles.css";


export const Favs = () => {
  const {state, dispatch} = useDentistStates();

  return (
    <div  className="favorites">
      <h1>Listado de dentistas favoritos</h1>
      <div className="container-cards">
        {
          state.favs.map((dentist)=>{
            return(
              <DentistCard dentist={dentist} key={dentist.id}/>
            )
          })
        }
      </div>
      <ButtonReturnHome/>
    </div>
  )
}
