import React from "react";


export const DentistCard = (dentist) => {

  // const addFav = ()=>{
  //   // Aqui iria la logica para agregar la Card en el localStorage
  // }

  return (
    <div 
    className="card" 
    key = {dentist.id}
    style={{
      border: "2px solid black",
      width: "200px",
      height: "300px",
    }}>
      <img 
        src="/images/doctor.jpg"  alt={`Foto de ${dentist.name}`}
        style={{
          width:"100%", 
          height: 200, 
          objectFit: "cover"
    }}
      />
            {/* En cada card deberan mostrar en name - username y el id */}
    <h2>{dentist.name}</h2>
    <h3>{dentist.username}</h3>
    <h4>{dentist.id}</h4>


        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
    
        {/* <button onClick={addFav} className="favButton">Add fav</button> */}
    </div>
  );
};


