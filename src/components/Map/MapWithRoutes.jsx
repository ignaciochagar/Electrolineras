// MapWithRoutes.jsx
import React from 'react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapWithRoutes = ({ coordinates }) => {
  return (
    <section className='map'>
      <MapContainer center={[40.43731467230963, -3.689847347507708]} zoom={6} style={{ height: '550px', width: '1000px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Polyline positions={coordinates} color="blue" />
      </MapContainer>
    </section>
  );
};

export default MapWithRoutes;
