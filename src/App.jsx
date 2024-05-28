// app.jsx
import { useState } from 'react';
import './App.css';
import Map from './components/Map'
import Login from "./components/login/Login"; // Asegúrate de que la ruta del componente Login sea correcta

import React from 'react';
import Navbar from './components/navbar/navbar';

function App() {

  return (
    <div>
      <Navbar />
      <>
        <h1>Inicia Sesion</h1>
        <Login /> {/* Renderiza el componente Login aquí */}

        <article className="map-outer">
          <Map

            title="Camino de Santiago"

          />
        </article>
      </>
    </div> 
      );
}

      export default App;
