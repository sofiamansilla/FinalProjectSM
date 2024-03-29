

/** 
 * @returns {React.Component}  The React component for the home page of the application
 * Trae a todos los dentistas desde la API que serán consumidos en Home.
 */

export const getAllDentist =()=>{
    return fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
}

/**
 * 
 * @param {*} id 
 * @returns {React.Component} Trae al dentista de la API según un ID determinado
 */

export const getDentistById = (id) =>{
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
}

