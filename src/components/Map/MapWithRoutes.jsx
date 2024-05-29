import React from 'react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import routes from './routes.jsx'
      
const MapWithRoutes = () => {
  const {
    caminoFrancesCoordinates,
    caminoPrimitivoCoordinates,
    caminoNorteCoordinates,
    viaDeLaPlataCoordinates,
    caminoSanabresCoordinates,
    caminoVascoCoordinates,
    caminoPortuguesCoordinates,
    caminoCatalanCoordinates,
    caminoBaztanesCoordinates,
    caminoInglesCoordinates,
    caminoSanSalvadorCoordinates,
    epilogoFisterraMuxiaCoordinates
} = routes;


  return (
    <section className='map'>
    <MapContainer center={[40.43731467230963, -3.689847347507708]} zoom={6} style={{ height: '550px', width: '1000px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Polyline positions={caminoFrancesCoordinates} color="blue" />
    </MapContainer>
    </section>
  );
};

export default MapWithRoutes;
