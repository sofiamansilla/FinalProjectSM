
/**
 * 
 * @param {@} name 
 * @return {ReactComponent} componente que valida el nombre con expresión regular
 */

export const validateFullName =(name)=> {

    const regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖ]{2,}$/;
    return regex.test(name.split(" ")[0]) && regex.test(name.split(" ")[1]);

  }

 