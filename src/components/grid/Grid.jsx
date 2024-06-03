// src/components/Grid.jsx
import React from 'react';
import Card from '../card/Card';
import { albergues } from '../../data/albergues.js';

const Grid = ({ onAlbergueClick }) => {
  return (
    <div className="grid">
      {albergues.map((albergue, index) => (
        <Card
          key={index}
          nombre={albergue.nombre}
          camino={albergue.camino}
          provincia={albergue.provincia}
          precio={albergue.precio}
          imagen={albergue.imagen}
          onClick={() => onAlbergueClick(albergue.camino)} // Pasa el camino al onClick
        />
      ))}
    </div>
  );
};


export default Grid;
