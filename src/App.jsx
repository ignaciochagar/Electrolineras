import React, { useState } from 'react';
import './App.css';
import MapWithRoutes from './components/Map/MapWithRoutes';
import Login from "./components/login/Login"; 
import Buttons from './components/rutebotton/rutebotton';
import Navbar from './components/navbar/navbar';
import electrolineras from './components/Map/electrolineras.jsx';
import Grid from './components/grid/Grid';
import './styles/styles.css';
import FormularioAnfitriones from './components/FormularioAnfitriones/FormularioAnfitriones';

function App() {
  const [selectedElectrolinera, setSelectedElectrolinera] = useState(electrolineras.toledoElectrolinera);
  const [provincia, setProvincia] = useState('Toledo');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState('map');

  const handleProvinciaChange = (provinciaLabel) => {
    switch (provinciaLabel) {
      case 'Toledo':
        setProvincia("Toledo");
        setSelectedElectrolinera(electrolineras.toledoElectrolinera);
        break;
      case 'Álava':
        setProvincia("Álava");
        setSelectedElectrolinera(electrolineras.alavaElectrolinera);
        break;
      case 'Albacete':
        setProvincia("Albacete");
        setSelectedElectrolinera(electrolineras.albaceteElectrolinera);
        break;
      // Añade más casos para otras provincias si es necesario
      default:
        setSelectedElectrolinera(electrolineras.toledoElectrolinera);
    }
  };

  const handleElectrolineraClick = (provincia) => {
    handleProvinciaChange(provincia); // Cambia la provincia según la electrolinera
    setCurrentView('map'); // Cambia la vista al mapa
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  return (
    <>
      <div>
        <Navbar onViewChange={handleViewChange} />
        {!isAuthenticated ? (
          <>
            <h1>Inicia Sesion</h1>
            <Login onLogin={handleLogin} />
          </>
        ) : (
          <>
            {currentView === 'map' && (
              <article className="map-outer">
                <h2>{provincia}</h2>
                <MapWithRoutes electrolineras={selectedElectrolinera} provincia={provincia} />
                <Buttons onProvinciaChange={handleProvinciaChange} />
              </article>
            )}
            {currentView === 'register' && (
              <section>
                <FormularioAnfitriones />
              </section>
            )}
            {currentView === 'grid' && (
              <section>
                <Grid onElectrolineraClick={handleElectrolineraClick} />
              </section>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App;
