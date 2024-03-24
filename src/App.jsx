
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from "./Components/pages/Home";
import { Detail } from "./Components/pages/Detail";
import { Contact } from "./Components/pages/Contact";
import { Favs } from "./Components/pages/Favs";
import { Layout } from "./Components/layouts/Layout";



function App() {
  return (

  <BrowserRouter>
  
    <Routes>

      <Route element={<Layout/>}>

        <Route  path="/" element={<Home/>}/>
        <Route  path="/Contact" element={<Contact/>}/>
        <Route  path="/Detail/:id" element={<Detail />}/>
        <Route  path="/Favs" element={<Favs/>}/>
      
      </Route>
    
        <Route  path="*" element={<h1>Error 404</h1>}/>
        
    </Routes>
  
  </BrowserRouter>


  );
}

export default App;


