// app.jsx
import { useState } from 'react';
import './App.css';
import Map from './components/Map'
import Login from "./components/login/Login"; // Asegúrate de que la ruta del componente Login sea correcta

function App() {

  return (
    <>
      <h1>Inicia Sesion</h1>
      <Login /> {/* Renderiza el componente Login aquí */}

      <article className="map-outer">
          <Map
          
            title="Camino de Santiago"

          />
      </article>
    </>
  );
}

export default App;
