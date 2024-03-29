import { 
  createContext, 
  useContext, 
  useReducer, 
  useEffect,
  useState, 
}  from "react";
// import {DentistReducer} from  './reducers/DentistReducer;


export const DentistStates = createContext(undefined);

// export const initialState = {
//   theme: "", 
//   data: []
// }

// /**
//  * @return {React.Component} Return the provider component with a value of the global state and dispatch function.
//  */

export const DentistContext = ({ children }) => {
const [favs, setFavs] = useState([])
console.log(favs);
//   {const [state, dispatch] = 
//     useReducer(DentistReducer, initialState);
//     useEffect(()=> 
//     { localStorage.setItem
//       ('data' , JSON.stringify(state.data));
//     },[state.data]);
  
    return (
    <DentistStates.Provider 
      value={{favs, setFavs}}>
        {children}
    </DentistStates.Provider>
  );
};

export const useDentistStates =()=> useContext(DentistStates) ;