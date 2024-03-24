# Pasos realizados

- [Documentanción] 

#Repositorio-clases
https://github.com/jorgeduje/front-3-segunda-parte/tree/react-router

#creando-una-ruta
https://drive.google.com/file/d/1R5NX1QVx2-BgpEdUx7JZV1eJ4g4ZuXcs/view

#Libreria-de-rutas
https://reactrouter.com/en/main

#Rutas-parametrizadas
https://drive.google.com/file/d/1OMpBqIh__szqI5wMJN2Ip3PPNRt43695/view

#Rutas-anidadas
https://drive.google.com/file/d/1CaF7ue1Bu1JQgSscRTtl05Z7yjTsy7FG/view

#Historial-API
https://developer.mozilla.org/en-US/docs/Web/API/History_API

#UseNavigate
https://drive.google.com/file/d/1b_zAZvxzzoSIdf2hKWiTOKag0HCKChME/view


## Creamos rama diferente para practicar las rutas y nos posicionamos en ella

git checkout -b route
git branch - M route

## Iniciando rutas

Instalamos las dependencias

`npm install react-router-dom`

## Dependencias

- react-router-dom

## Pasos a realizados

Tareas realizadas en prueba para llegar al resultado:

### Paso 1 DH: 

Una vez instaladas las dependencias, vamos a envolver nuestra app con un componente propio de React Router que nos permitirá vincular nuestra web con la URL del browser:

//index.js o main.js
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
 
const rootElement = document.getElementById("root");
render(
   <BrowserRouter>
     <App />
   </BrowserRouter>,
  rootElement);

  ### Paso 2, clases:

  En App.jsx realizamos el import de la libreria de rutas

  import { BrowserRouter, Routes, route } from "react-router-dom";

  function App() {

  return (
    <BrowserRouter>
      <Routes>
      
        <Route/>
     </Routes>
    </BrowserRouter>
  );
}

### Definición de rutas solicitadas:

  - [Rutas](#rutas)
    - [Página 1: Inicio (/home)](#pagina-1-inicio-home)
    - [Página 2: Contacto (/contact)](#pagina-2-contacto)
    - [Página 3: Detalle del dentista (/dentist/:id)](#pagina-3-detalle-del-dentista)
    - [Página 4: Destacados (/favs)](#pagina-4-destacados)
    

