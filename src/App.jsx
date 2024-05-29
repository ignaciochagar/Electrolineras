
// app.jsx
import { useState } from 'react';
import './App.css';
import Map from './components/Map/Map';
import MapWithRoutes from './components/Map/MapWithRoutes';
import Login from "./components/login/Login"; // Asegúrate de que la ruta del componente Login sea correcta
import Buttons from './components/rutebotton/rutebotton';
import React from 'react';
import Navbar from './components/navbar/navbar';

import Grid from './components/grid/Grid';
import './styles/styles.css';

function App() {

  return (
    <>
      <div>
      <Navbar/>
      <h1>Inicia Sesion</h1>

      <Login /> {/* Renderiza el componente Login aquí */}

      <article className="map-outer">

        <MapWithRoutes
        title="Camino de Santiago"
         />

      </article>

      <section>

        <Buttons />

      </section>
      <Grid />
      </div>
    </>
  );
}

export default App;
