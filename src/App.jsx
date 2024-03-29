
import { 
  BrowserRouter, 
  Routes, 
  Route} from "react-router-dom";
import { Home } from "./Components/pages/home"
import { Contact } from "./Components/pages/contact";
import { Detail } from "./Components/pages/detail";
import { Favs } from "./Components/pages/favs";
import { Layout  } from "./Components/layouts/Layout";
import { NotFound } from "./Components/pages/notFound/NotFound";


function App() {
  return (

  <BrowserRouter>
  
    <Routes>

      <Route element={<Layout/>}>

        <Route  path="/" element={ <Home/> }/>
        <Route  path="/Contact" element={<Contact/>}/>
        <Route  path="/Dentist/:id" element={<Detail/>}/>
        <Route  path="/Favs" element={<Favs/>}/>
      
      </Route>
    
        <Route  path="*" element={<NotFound/>}/>
        
    </Routes>
  
  </BrowserRouter>


  );
}

export default App;


