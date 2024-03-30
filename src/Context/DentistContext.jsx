import { 
  createContext, 
  useContext, 
  useReducer, 
  useEffect,
}  from "react";

const DentistStates = createContext()

let initialState = {
    favs: [],
    darkMode: false
}

const dentistReducer = (state, action)=>{

    switch(action.type){

        case "ADD_FAVORITE":
            return {...state, favs: [ ...state.favs, action.payload ]}

        case "CHANGUE_MODE":
            return {...state, darkMode: !state.darkMode}
        
        case  "REMOVE_FAVORITE":
            return{}
        
        default:
            return state
    }
}

export const DentistContext = ({children}) =>{
    const [state, dispatch] = useReducer(dentistReducer, initialState)

    let data = {state, dispatch}
    return(
        <DentistStates.Provider value={data}>
            {children}
        </DentistStates.Provider>
    )
}
export const useDentistStates = () => useContext(DentistStates);