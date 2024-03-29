import React from "react";
import {Link} from "react-router-dom"



export const DentistCard = ({dentist}) => {
  console.log(DentistCard);

  // const addFav = ()=>{
  //   // Aqui iria la logica para agregar la Card en el localStorage
  // }

  return (
    <div 
    className="dentistCard-component" 
    style={{
      border: "2px solid black",
      width: "200px",
      height: "300px",
    }}
    >
      <img 
        src="/images/doctor.jpg"  alt={`Foto de ${dentist.name}`}
        style={{
          width:"100%", 
          height: 200, 
          objectFit: "cover"
    }}
    
      />

    <h2>{dentist.name}</h2>
    <h3>{dentist.username}</h3>
    <Link to={`/Dentist/${dentist.id}`}><button>Ver información del profesional</button></Link>

      <button onClick={() =>{}}>
        <span className="star-favs">
          <img 
            src="/images/ico-star.png" 
            alt="Agregar a favoritos" 
          />
        </span>
      </button>
     



            {/* En cada card deberan mostrar en name - username y el id */}



        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
    
        {/* <button onClick={addFav} className="favButton">Add fav</button> */}
    </div>
  );
};


