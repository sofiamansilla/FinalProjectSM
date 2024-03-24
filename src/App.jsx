
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<h1>Home</h1>}/>
        <Route path="/contact" element={<h1>Contacto</h1>}/>
        <Route path="/dentist/:id" element={<h1>Detalle del dentista</h1>}/>
        <Route path="/favs" element={<h1>Destacados</h1>}/>

     </Routes>
    </BrowserRouter>
  );
}

export default App;
