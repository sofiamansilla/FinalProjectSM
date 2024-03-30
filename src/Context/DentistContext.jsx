import { 
  createContext, 
  useContext, 
  useReducer, 
  useEffect,
}  from "react";

const DentistStates = createContext()
const lsFavs = JSON.parse(localStorage.getItem('favs'))

let initialState = {
    favs: lsFavs ||[],
    darkMode: false
}

const dentistReducer = (state, action)=>{

    switch(action.type){

        case "ADD_FAVORITE":
            const fav = state.favs.find((fav)=> action.payload.id === fav.id)
            if (fav) {
                return state;
            }
            return {...state, favs: [ ...state.favs, action.payload ]}

        case  "REMOVE_FAVORITE":
            let index = 0;
            state.favs.forEach((fav, i) => {
                if (fav.id === action.payload.id) {
                    index = i;
                }
            })
            state.favs.splice(index,1);
            return{...state, favs: [ ...state.favs]} 

        case "CHANGUE_MODE":
            return {...state, darkMode: !state.darkMode}
        
        default:
            return state
    }
}

export const DentistContext = ({children}) =>{
    const [state, dispatch] = useReducer(dentistReducer, initialState)

    let data = {state, dispatch};

    useEffect(()=>{
        localStorage.setItem('favs', JSON.stringify(state.favs))
    }, [state.favs])
    
    return(
        <DentistStates.Provider value={data}>
            {children}
        </DentistStates.Provider>
    )
}
export const useDentistStates = () => useContext(DentistStates);