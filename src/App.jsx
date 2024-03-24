
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from "./Components/pages/Home";
import { Detail } from "./Components/pages/Detail";
import { Contact } from "./Components/pages/Contact";
import { Favs } from "./Components/pages/Favs";
import { Layout } from "./Components/layouts/Layout";
import {Link} from "react-router-dom"



function App() {
  return (

  <BrowserRouter>
  
    <Routes>

      <Route element={<Layout/>}>

        <Route  path="/" element={<Home/>}/>
        <Route  path="/Contact" element={<Contact/>}/>
        <Route  path="/Dentist/:id" element={<Detail/>}/>
        <Route  path="/Favs" element={<Favs/>}/>
      
      </Route>
    
        <Route  path="*" element={<Link to="/"><button>Ché, volvete a tu casa, este dentista no está de turno</button></Link>}/>


        
    </Routes>
  
  </BrowserRouter>


  );
}

export default App;


