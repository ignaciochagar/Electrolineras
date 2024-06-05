import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.vectorgrid/dist/Leaflet.VectorGrid.css';
import 'leaflet.vectorgrid/dist/Leaflet.VectorGrid';

const Map = () => {
  useEffect(() => {
    const map = L.map('map').setView([40.4168, -3.7038], 6); // Centrado en España

    // Capa base
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // Capa de provincias
    const provinciasLayer = L.vectorGrid.slicer('http://www.ign.es/wmts/ign-base?', {
      subdomains: ['a', 'b', 'c', 'd'],
      layers: 'IGNBaseTodo',
      maxZoom: 18,
      minZoom: 6,
    }).addTo(map);

    // Estilo para resaltar provincias
    provinciasLayer.setStyle({
      fillColor: '#3388ff',
      fillOpacity: 0.5,
      color: '#3388ff',
      weight: 2,
    });
  }, []);

  return <div id="map" style={{ width: '100%', height: '600px' }}></div>;
};

export default Map;
