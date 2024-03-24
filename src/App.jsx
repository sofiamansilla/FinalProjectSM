
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from "./Components/pages/Home";
import { Detail } from "./Components/pages/Detail";
import { Contact } from "./Components/pages/Contact";
import { Favs } from "./Components/pages/Favs";
import { Navbar } from "./Components/layouts/Navbar";
import { Footer } from "./Components/layouts/Footer";



function App() {
  return (

  <BrowserRouter>
  
    <Routes>

      <Route element={<Navbar/>}>
      <Route element={<Footer/>}>

        <Route  path="/" element={<Home/>}/>
        <Route  path="/Contact" element={<Contact/>}/>
        <Route  path="/Detail" element={<Detail/>}/>
        <Route  path="/Favs" element={<Favs/>}/>
      
      </Route>
      </Route>
    
    </Routes>
  
  </BrowserRouter>


  );
}

export default App;


