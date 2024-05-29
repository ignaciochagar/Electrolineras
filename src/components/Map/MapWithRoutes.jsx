import React from 'react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapWithRoutes = () => {
  const caminoDeSantiago = [
    // Añade aquí las coordenadas de la ruta del Camino de Santiago
    [43.163, -1.236], // Saint-Jean-Pied-de-Port
    [43.009, -1.322], // Roncesvalles
    [42.921, -1.414], // Zubiri
    [42.818, -1.645], // Pamplona
    [42.672, -1.823], // Puente la Reina
    [42.672, -2.028], // Estella
    [42.573, -2.190], // Los Arcos
    [42.465, -2.445], // Logroño
    [42.417, -2.731], // Nájera
    [42.440, -2.953], // Santo Domingo de la Calzada
    [42.420, -3.194], // Belorado
    [42.368, -3.401], // San Juan de Ortega
    [42.343, -3.696], // Burgos
    [42.320, -3.844], // Hornillos del Camino
    [42.287, -4.114], // Castrojeriz
    [42.267, -4.403], // Frómista
    [42.338, -4.600], // Carrión de los Condes
    [42.369, -5.025], // Sahagún
    [42.424, -5.313], // El Burgo Ranero
    [42.480, -5.401], // Mansilla de las Mulas
    [42.599, -5.572], // León
    [42.536, -5.743], // Villadangos del Páramo
    [42.455, -6.060], // Astorga
    [42.479, -6.365], // Rabanal del Camino
    [42.544, -6.597], // Ponferrada
    [42.604, -6.808], // Villafranca del Bierzo
    [42.707, -7.010], // O Cebreiro
    [42.744, -7.230], // Triacastela
    [42.779, -7.415], // Sarria
    [42.809, -7.615], // Portomarín
    [42.874, -7.868], // Palas de Rei
    [42.931, -8.158], // Arzúa
    [42.921, -8.306], // Pedrouzo
    [42.880, -8.544]
    // Añade más coordenadas según sea necesario
  ];

  return (
    <section className='map'>
    <MapContainer center={[40.43731467230963, -3.689847347507708]} zoom={6} style={{ height: '550px', width: '1000px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Polyline positions={caminoDeSantiago} color="blue" />
    </MapContainer>
    </section>
  );
};

export default MapWithRoutes;
