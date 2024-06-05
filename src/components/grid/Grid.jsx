// src/components/Grid.jsx

import React from 'react';
import Card from '../card/Card';
import { electrolineras } from '../../data/electrolineras.js'; // Asegúrate de importar los datos correctos

const Grid = ({ onElectrolineraClick }) => { // Cambiado el nombre de la función
  return (
    <div className="grid">
      {electrolineras.map((electrolinera, index) => ( // Cambiado el nombre de la variable
        <Card
          key={index}
          nombre={electrolinera.nombre}
          provincia={electrolinera.provincia} // Eliminado el atributo "camino"
          precio={electrolinera.precio}
          imagen={electrolinera.imagen}
          onClick={() => onElectrolineraClick(electrolinera.provincia)} // Pasa la provincia al onClick
        />
      ))}
    </div>
  );
};

export default Grid;

