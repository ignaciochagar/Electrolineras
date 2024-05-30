
// app.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import MapWithRoutes from './components/Map/MapWithRoutes';
import Login from "./components/login/Login"; // Asegúrate de que la ruta del componente Login sea correcta
import Buttons from './components/rutebotton/rutebotton';
import Navbar from './components/navbar/navbar';
import routes from './components/Map/routes.jsx';

function App() {
  const [selectedRouteLabel, setSelectedRouteLabel] = useState('Camino Francés');
  const [selectedRouteCoordinates, setSelectedRouteCoordinates] = useState(routes.caminoFrancesCoordinates);

  useEffect(() => {
    switch (selectedRouteLabel) {
      case 'Camino Francés':
        setSelectedRouteCoordinates(routes.caminoFrancesCoordinates);
        break;
      case 'Camino Primitivo':
        setSelectedRouteCoordinates(routes.caminoPrimitivoCoordinates);
        break;
      case 'Camino del Norte':
        setSelectedRouteCoordinates(routes.caminoNorteCoordinates);
        break;
      case 'Via de la Plata':
        setSelectedRouteCoordinates(routes.viaDeLaPlataCoordinates);
        break;
      case 'Camino Sanabrés':
        setSelectedRouteCoordinates(routes.caminoSanabresCoordinates);
        break;
      case 'Camino Vasco':
        setSelectedRouteCoordinates(routes.caminoVascoCoordinates);
        break;
      case 'Camino Portugués':
        setSelectedRouteCoordinates(routes.caminoPortuguesCoordinates);
        break;
      case 'Camino Catalán por San Juan de la Peña':
        setSelectedRouteCoordinates(routes.caminoCatalanCoordinates);
        break;
      case 'Camino Baztanés':
        setSelectedRouteCoordinates(routes.caminoBaztanesCoordinates);
        break;
      case 'Camino Inglés':
        setSelectedRouteCoordinates(routes.caminoInglesCoordinates);
        break;
      case 'Camino de San Salvador':
        setSelectedRouteCoordinates(routes.caminoSanSalvadorCoordinates);
        break;
      case 'Epílogo a Fisterra y Muxía':
        setSelectedRouteCoordinates(routes.epilogoFisterraMuxiaCoordinates);
        break;
      default:
        setSelectedRouteCoordinates(routes.caminoFrancesCoordinates);
    }
  }, [selectedRouteLabel]);

  return (
    <>
      <div className='general'>
        <Navbar/>
        <h1>Inicia Sesion</h1>
        <Login />
        <article className="map-outer">
          <h2>{selectedRouteLabel}</h2>
          <MapWithRoutes coordinates={selectedRouteCoordinates}/>
        </article>
        <section>
          <Buttons onRouteChange={setSelectedRouteLabel} />
        </section>
      </div>
    </>
  );
}

export default App;
