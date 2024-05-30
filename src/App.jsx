
// app.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import MapWithRoutes from './components/Map/MapWithRoutes';
import Login from "./components/login/Login"; // Asegúrate de que la ruta del componente Login sea correcta
import Buttons from './components/rutebotton/rutebotton';
import Navbar from './components/navbar/Navbar';
import routes from './components/Map/routes.jsx';

function App() {
  const [selectedRouteLabel, setSelectedRouteLabel] = useState('Camino Francés');
  const [selectedRouteCoordinates, setSelectedRouteCoordinates] = useState(routes.caminoFrancesCoordinates);


  return (
    <>
      <div>
        <Navbar/>
        <h1>Inicia Sesion</h1>
        <Login />
        <article className="map-outer">
          <MapWithRoutes coordinates={selectedRouteCoordinates} />
        </article>
        <section>
          <Buttons onRouteChange={setSelectedRouteLabel} />
        </section>
      </div>
    </>
  );
}

export default App;
