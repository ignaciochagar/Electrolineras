import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icono from "../../../public/img/greenMarker.png";
import electrolineras from "../../Database/Electrolineras.json";

const icon = new L.Icon({
  iconUrl: icono,
  iconSize: [32, 32],
  iconAnchor: [16, 0],
  popupAnchor: [0, -12]
});

const MapWithRoutes = ({ coordinates, provincia }) => {
  const [filteredElectrolineras, setFilteredElectrolineras] = useState([]);
  const [showMarkers, setShowMarkers] = useState(true);

  console.log("La provincia es", provincia);
  //console.log("La provincia es", coordinates);

  useEffect(() => {
    // Filtrar las electrolineras basadas en la provincia seleccionada
    const electrolinerasChinchetas = electrolineras.payload.energyInfrastructureTable.energyInfrastructureSite.filter(
      electrolinera => 
        electrolinera.locationReference._locationReferenceExtension.facilityLocation.address.addressLine.some(
          line => line.text.values.value.includes(`Provincia: ${provincia}`)
        )
    );

    if (electrolinerasChinchetas.length === 0) {
      console.log(`No se encontraron electrolineras en la provincia ${provincia}`);
    }
    console.log("Electrolineras filtradas", electrolinerasChinchetas);
    setFilteredElectrolineras(electrolinerasChinchetas);
  }, [provincia]);

  const toggleMarkers = () => {
    setShowMarkers(!showMarkers);
  };

  return (
    <section className='map'>
      <button onClick={toggleMarkers}>
        {showMarkers ? 'Ocultar Electrolineras' : 'Mostrar Electrolineras'}
      </button>
      <MapContainer center={[40.43731467230963, -3.689847347507708]} zoom={6} style={{ height: '550px', width: '1000px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {showMarkers && filteredElectrolineras.map(electrolinera => (
          <Marker
            key={electrolinera.name.values.value}
            position={[
              electrolinera.locationReference.coordinatesForDisplay.latitude,
              electrolinera.locationReference.coordinatesForDisplay.longitude
            ]}
            icon={icon}
          >
            <Popup>
              <strong>{electrolinera.name.values.value}</strong><br />
              Última actualización: {new Date(electrolinera.lastUpdated).toLocaleString()}<br />
              Horario: {electrolinera.operatingHours.label}<br />
              Dirección: {electrolinera.locationReference._locationReferenceExtension.facilityLocation.address.addressLine.map(line => line.text.values.value).join(', ')}<br />
              Municipio: {electrolinera.locationReference._locationReferenceExtension.facilityLocation.address.addressLine.find(line => line.text.values.value.startsWith("Municipio:")).text.values.value.split(': ')[1]}<br />
              Provincia: {electrolinera.locationReference._locationReferenceExtension.facilityLocation.address.addressLine.find(line => line.text.values.value.startsWith("Provincia:")).text.values.value.split(': ')[1]}<br />
              Comunidad Autónoma: {electrolinera.locationReference._locationReferenceExtension.facilityLocation.address.addressLine.find(line => line.text.values.value.startsWith("Comunidad Autónoma:")).text.values.value.split(': ')[1]}<br />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
};

export default MapWithRoutes;
