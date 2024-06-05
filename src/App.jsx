import React, { useState } from 'react';
import './App.css';
import MapWithRoutes from './components/Map/MapWithRoutes';
import Login from "./components/login/Login";
import Buttons from './components/rutebotton/rutebotton';
import Navbar from './components/navbar/navbar';
import electrolineras from './Database/Electrolineras.json';
import Grid from './components/grid/Grid';
import './styles/styles.css';
import FormularioAnfitriones from './components/FormularioAnfitriones/FormularioAnfitriones';

function App() {
  //const [selectedElectrolinera, //setSelectedElectrolinera] = useState(electrolineras.toledoElectrolinera);
  const [provincia, setProvincia] = useState('Asturias');
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [currentView, setCurrentView] = useState('map');

  const handleProvinciaChange = (provinciaLabel) => {
    setProvincia(provinciaLabel);
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
                <h2 >{provincia}</h2>
                <MapWithRoutes provincia={provincia} />
                <Buttons onRouteChange={handleProvinciaChange} />
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
