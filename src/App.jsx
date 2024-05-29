
// app.jsx
import React, { useState } from 'react';
import './App.css';
import MapWithRoutes from './components/Map/MapWithRoutes';
import Login from "./components/login/Login"; // Asegúrate de que la ruta del componente Login sea correcta
import Buttons from './components/rutebotton/rutebotton';
import Navbar from './components/navbar/navbar';
import routes from './components/Map/routes.jsx';

function App() {
  const [selectedRoute, setSelectedRoute] = useState(routes.caminoFrancesCoordinates);

  const handleRouteChange = (routeLabel) => {
    switch (routeLabel) {
      case 'Camino Francés':
        setSelectedRoute(routes.caminoFrancesCoordinates);
        break;
      case 'Camino Primitivo':
        setSelectedRoute(routes.caminoPrimitivoCoordinates);
        break;
      case 'Camino del Norte':
        setSelectedRoute(routes.caminoNorteCoordinates);
        break;
      case 'Via de la Plata':
        setSelectedRoute(routes.viaDeLaPlataCoordinates);
        break;
      case 'Camino Sanabrés':
        setSelectedRoute(routes.caminoSanabresCoordinates);
        break;
      case 'Camino Vasco':
        setSelectedRoute(routes.caminoVascoCoordinates);
        break;
      case 'Camino Portugués':
        setSelectedRoute(routes.caminoPortuguesCoordinates);
        break;
      case 'Camino Catalán por San Juan de la Peña':
        setSelectedRoute(routes.caminoCatalanCoordinates);
        break;
      case 'Camino Baztanés':
        setSelectedRoute(routes.caminoBaztanesCoordinates);
        break;
      case 'Camino Inglés':
        setSelectedRoute(routes.caminoInglesCoordinates);
        break;
      case 'Camino de San Salvador':
        setSelectedRoute(routes.caminoSanSalvadorCoordinates);
        break;
      case 'Epílogo a Fisterra y Muxía':
        setSelectedRoute(routes.epilogoFisterraMuxiaCoordinates);
        break;
      default:
        setSelectedRoute(routes.caminoFrancesCoordinates);
    }
  };

  return (
    <>
      <div>
        <Navbar/>
        <h1>Inicia Sesion</h1>
        <Login />
        <article className="map-outer">
          <MapWithRoutes coordinates={selectedRoute} />
        </article>
        <section>
          <Buttons onRouteChange={handleRouteChange} />
        </section>
      </div>
    </>
  );
}


export default App;
