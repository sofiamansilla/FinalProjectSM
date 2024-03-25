export const getDentistById = (id) =>{
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
}